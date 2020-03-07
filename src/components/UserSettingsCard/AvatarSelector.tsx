import React, { CSSProperties, useState, useEffect } from 'react';
import { Avatar, Modal } from 'antd';

const normalStyle: CSSProperties = {
  backgroundColor: '#EEEEEE',
  margin: '6px',
  cursor: 'pointer',
  display: 'inline-block',
  border: '1px solid transparent',
};

const activeStyle: CSSProperties = {
  backgroundColor: '#EEEEEE',
  border: '1px solid #05bcf5',
  margin: '6px',
  cursor: 'pointer',
  display: 'inline-block',
};

type AvatarSelectorProps = {
  defaultValue?: number;
  style?: CSSProperties;
  onChange?: (id: number) => void;
};

function AvatarSelector({
  defaultValue = 1,
  style,
  onChange,
}: AvatarSelectorProps) {
  const [visible, setVisible] = useState(false);
  const [avatarId, setAvatarId] = useState(defaultValue);
  const [tempId, setTempId] = useState(defaultValue);

  useEffect(() => {
    onChange && onChange(avatarId);
    // eslint-disable-next-line
  }, [avatarId]);

  const handleOk = () => {
    setVisible(false);
    setAvatarId(tempId);
  };

  const handleCancel = () => {
    setVisible(false);
  };

  const handleChooseAvatar = (id: number) => {
    setTempId(id);
  };

  return (
    <>
      <div style={{...normalStyle, ...{borderRadius: '50%'}, ...(style || {})}}
        onClick={_ => setVisible(true)}>
        <Avatar shape="circle"
          src={require(`@/assets/images/avatar/avatar-${avatarId}.png`)} />
      </div>
      <Modal
        closable={false}
        visible={visible}
        onOk={handleOk}
        onCancel={handleCancel}
        width={360} >
        {new Array(16).fill(null).map((_, index) => {
          return (
            <span style={tempId === index + 1 ? activeStyle : normalStyle} key={index}
              onClick={_ => handleChooseAvatar(index + 1)}>
              <Avatar shape="square"
                src={require(`@/assets/images/avatar/avatar-${index + 1}.png`)} />
            </span>
          );
        })}
      </Modal>
    </>
  );
}

export default React.memo(AvatarSelector);
