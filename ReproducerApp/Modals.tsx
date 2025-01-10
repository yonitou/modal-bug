import React from 'react';
import {View, Modal, StyleSheet, Button, Text} from 'react-native';

type ModalContentProps = {
  visible: boolean;
  onClose: () => void;
  title: string;
  backgroundColor: string;
};

const ModalContent: React.FC<ModalContentProps> = ({
  visible,
  backgroundColor,
  onClose,
  title,
}) => {
  if (!visible) {
    return null;
  }

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={visible}
      onRequestClose={onClose}>
      <View style={styles.centeredView}>
        <View style={{...styles.modalView, backgroundColor}}>
          <Text style={{...styles.modalTitle}}>{title}</Text>
          <Button title="Close Modal" onPress={onClose} />
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalView: {
    backgroundColor: 'white',
    borderRadius: 20,
    width: '90%',
    height: '90%',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  modalTitle: {
    marginBottom: 15,
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default ModalContent;
