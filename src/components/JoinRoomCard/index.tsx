import React, { useState, useEffect, useCallback } from 'react';
import { Button, Card, Input, Form } from 'antd';
import { SettingFilled, HomeFilled, LockFilled } from '@ant-design/icons';

import s from './index.module.less';
import ScaleInWrapper from '@/components/ScaleInWrapper';
import { sessionStorage as storage } from '@/tools/storage';
import { VersionContents, PASSWORD_PATTERN } from '@/constants';

// form 的 ts 定义好像有点问题，一些属性没定义好，所以这里设置为 any
const MForm: any = Form;
const MFormItem: any = Form.Item;
const { Meta } = Card;

type JoinRoomCardProps = {
  defaultRoomName?: string;
  defaultPassword?: string;
  onSubmit?: (formValues: FormType) => void;
  onOpenSettings?: () => void;
}

type FormType = {
  roomName: string;
  password: string;
}

const roomNameFormRules = [
  { required: true, message: 'Please input a room name!' },
  {
    max: 18,
    message: 'Room name must not exceed 18 characters',
  },
  {
    min: 3,
    message: 'Room name must be at least 3 characters',
  },
  {
    pattern: /^[0-9a-zA-Z]+$/,
    message: 'Can only contain alphalet in uppercase or number!',
  }
];

const passwordFormRules = [
  {
    max: 18,
    message: 'Password must not exceed 18 characters',
  },
  {
    pattern: PASSWORD_PATTERN,
    message: 'Invalid password',
  }
];

function JoinRoomCard({
  defaultRoomName = '',
  defaultPassword = '',
  onSubmit,
  onOpenSettings,
}: JoinRoomCardProps) {
  const [form] = Form.useForm();
  const formInitValue: FormType = {
    roomName: defaultRoomName,
    password: defaultPassword,
  };

  const [versionContentIndex, setVersionContentIndex] = useState(0);

  useEffect(() => {
    form.setFieldsValue({roomName: form.getFieldValue('roomName')});
    return () => {
      storage.save('tempRoomName', form.getFieldValue('roomName'));
    };
    // eslint-disable-next-line
  }, []);

  const handleSubmit = useCallback((formValues: FormType) => {
    formValues.roomName = formValues.roomName.toUpperCase();
    onSubmit && onSubmit(formValues);
  }, [onSubmit]);

  const switchVersion = useCallback(() => {
    const count = (versionContentIndex === VersionContents.length - 1)
      ? 0 : versionContentIndex + 1;
    setVersionContentIndex(count);
  }, [versionContentIndex]);

  const handleSetting = useCallback(() => {
    onOpenSettings && onOpenSettings();
  }, [onOpenSettings]);

  return (
    <ScaleInWrapper className={s.joinRoomCardComponent}>
      <Card className={s.animationAppeat}>
        <header>
          <SettingFilled className={s.settingIcon} onClick={handleSetting} />
          <div className={s.logoWrapper}>
            <img src={require('@/assets/images/logo2.png')} alt="logo" />
            <span />
          </div>
        </header>

        <MForm className={s.form} form={form} initialValues={formInitValue} onFinish={handleSubmit}>
          <MFormItem name="roomName" rules={roomNameFormRules}>
            <Input autoComplete="off" prefix={<HomeFilled />} placeholder="Room name"/>
          </MFormItem>

          <MFormItem name="password" rules={passwordFormRules}>
            <Input autoComplete="off" prefix={<LockFilled />} placeholder="Room password" />
          </MFormItem>

          <Button className={s.submitBtn} type="primary" htmlType="submit">Join</Button>
        </MForm>

        <div className={s.versionInfo} onClick={switchVersion}>
          <Meta description={VersionContents[versionContentIndex]} />
        </div>
      </Card>
    </ScaleInWrapper>
  );
}

export default React.memo(JoinRoomCard);
