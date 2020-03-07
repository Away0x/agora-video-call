import React, { useState, useCallback } from 'react';
import { Button, Card, Input, Form } from 'antd';
import { ArrowLeftOutlined, UserOutlined } from '@ant-design/icons';

import s from './index.module.less';
import ScaleInWrapper from '@/components/ScaleInWrapper';
import { VersionContents } from '@/constants';

const MForm: any = Form;
const MFormItem: any = Form.Item;
const { Meta } = Card;

type SetNicknameCardProps = {
  defaultNickname?: string;
  onSubmit?: (formValues: FormType) => void;
  onCancel?: () => void;
};

type FormType = {
  nickname: string;
}

const nickNameFormRules = [
  {
    required: true,
    message: 'Please input a nickname!',
  },
  {
    max: 18,
    message: 'Nickname must not exceed 18 characters',
  },
];

function SetNicknameCard({
  defaultNickname = '',
  onSubmit,
  onCancel,
}: SetNicknameCardProps) {
  const [form] = Form.useForm();
  const formInitValue: FormType = {
    nickname: defaultNickname,
  };

  const [versionContentIndex, setVersionContentIndex] = useState(0);

  const handleCancel = useCallback(() => {
    onCancel && onCancel();
  }, [onCancel]);

  const handleSubmit = useCallback((formValues: FormType) => {
    onSubmit && onSubmit(formValues);
  }, [onSubmit]);

  const switchVersion = useCallback(() => {
    const count = (versionContentIndex === VersionContents.length - 1)
      ? 0 : versionContentIndex + 1;
    setVersionContentIndex(count);
  }, [versionContentIndex]);

  return (
    <ScaleInWrapper className={s.setNicknameCardComponent}>
      <Card className={s.animationAppeat}>
        <header>
          <div className={s.cardTitle}>
            <ArrowLeftOutlined className={s.backIcon} onClick={handleCancel} />
            <span className={s.titleText}>Set name</span>
          </div>
        </header>

        <MForm form={form} className={s.form} initialValues={formInitValue} onFinish={handleSubmit}>
          <MFormItem name="nickname" rules={nickNameFormRules}>
            <Input prefix={<UserOutlined />} placeholder="Your name" />
          </MFormItem>

          <Button className={s.submitBtn} type="primary" htmlType="submit">Confirm</Button>
        </MForm>

        <div className={s.versionInfo} onClick={switchVersion}>
          <Meta description={VersionContents[versionContentIndex]} />
        </div>
      </Card>
    </ScaleInWrapper>
  );
}

export default React.memo(SetNicknameCard);
