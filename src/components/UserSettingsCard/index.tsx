import React, { useCallback } from 'react';
import { Button, Card, Divider, Input, Form } from 'antd';
import { ArrowLeftOutlined } from '@ant-design/icons';

import s from './index.module.less';
import ScaleInWrapper from '@/components/ScaleInWrapper';

import AvatarSelector from './AvatarSelector';
import { useSwitcher } from './helpers';

const MForm: any = Form;
const MFormItem: any = Form.Item;

type UserSettingsCardProps = {
  defaultAvatarId?: string;
  defaultNickname?: string;
  defaultEnableVideo?: boolean;
  defaultEnableAudio?: boolean
  onSubmit?: (formValues: FormType) => void;
  onCancel?: () => void;
};

export type FormType = {
  avatarId: string;
  nickname: string;
  videoEnabled: boolean;
  audioEnabled: boolean;
};

const formItemLayout = {
  labelCol: {
    xs: { span: 8 },
    sm: { span: 8 }
  },
  wrapperCol: {
    xs: { span: 16 },
    sm: { span: 16 }
  },
  colon: false,
  labelAlign: 'left',
};

const nicknameFormRules = [
  {
    required: true,
    message: 'Please input a nickname!',
  },
  {
    max: 18,
    message: 'Nickname must not exceed 18 characters',
  },
];


function UserSettingsCard({
  defaultAvatarId = '1',
  defaultNickname = '',
  defaultEnableVideo = true,
  defaultEnableAudio = true,
  onSubmit,
  onCancel,
}: UserSettingsCardProps) {
  const [form] = Form.useForm();
  const formInitValue: FormType = {
    avatarId: defaultAvatarId,
    nickname: defaultNickname,
    videoEnabled: defaultEnableVideo,
    audioEnabled: defaultEnableAudio,
  };

  const { Switcher: CameraSwitcher } = useSwitcher('camera');
  const { Switcher: MicSwitcher } = useSwitcher('mic');

  const handleCancel = useCallback(() => {
    onCancel && onCancel();
  }, [onCancel]);

  const handleSubmit = useCallback((formValues: FormType) => {
    onSubmit && onSubmit(formValues);
  }, [onSubmit]);

  return (
    <ScaleInWrapper className={s.userSettingsCardComponent}>
      <Card className={s.animationAppeat}>
        <header>
          <div className={s.cardTitle}>
            <ArrowLeftOutlined className={s.backIcon} onClick={handleCancel} />
            <span className={s.titleText}>User Setting</span>
          </div>
        </header>

        <Divider />

        <MForm form={form} className={s.form} initialValues={formInitValue} onFinish={handleSubmit}>
          <MFormItem name="avatarId" label="Avatar" {...formItemLayout}>
            <AvatarSelector style={{ float: 'right' }} />
          </MFormItem>

          <MFormItem name="nickname" label="Name" {...formItemLayout} rules={nicknameFormRules}>
            <Input placeholder="Your name" />
          </MFormItem>

          <Divider />

          <MFormItem name="videoEnabled" label="Camera" {...formItemLayout} style={{ marginBottom: '0' }} >
            <CameraSwitcher style={{ float: 'right' }} />
          </MFormItem>

          <MFormItem name="audioEnabled" label="Microphone" {...formItemLayout} style={{ marginBottom: '0' }}>
            <MicSwitcher style={{ float: 'right' }} />
          </MFormItem>

          <Divider />

          <Button className={s.submitBtn} type="primary" htmlType="submit">Confirm</Button>
        </MForm>
      </Card>
    </ScaleInWrapper>
  );
}

export default React.memo(UserSettingsCard);
