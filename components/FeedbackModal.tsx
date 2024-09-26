import React from 'react';
import { View, Text, Modal, TouchableOpacity, TouchableWithoutFeedback } from 'react-native';
import { BlurView } from 'expo-blur'; // Import from expo-blur
import { Feather } from '@expo/vector-icons';

interface FeedbackModalProps {
    visible?: boolean;
    message: string;
    type: 'success' | 'error'|'delete';
    onClose: () => void;
}


const FeedbackModal: React.FC<FeedbackModalProps> = ({ visible=true, message, type, onClose }) => {
    return (
        <Modal transparent visible={visible} animationType="fade">
            <TouchableWithoutFeedback onPress={onClose} >
                <View className=" h-full  flex-col relative">

                    <BlurView style={{ flex: 1, width: '100%' }} intensity={10} tint="systemMaterialDark">
                        <TouchableWithoutFeedback className=''>
                            <View className="w-full shadow-2xxl rounded-t-lg p-5 items-center absolute bottom-0">
                                <View
                                    className={` w-full bg-white dark:bg-slate-800 rounded-xl p-5 items-center ${type === 'success' ? '' : ''}`}
                                >
                                    <Text
                                        className={` font-bold mb-2 ${type === 'success' ? 'text-green-500' : 'text-red-500'}`}
                                    >
                                        {/* {type === 'success' ? 'Success' : 'Error'} */}
                                        <Feather name={type==='success'?'check-circle':(type==='error'?'alert-circle':'trash')}  size={40}/>
                                    </Text>
                                    <Text className="font-sreg text-lg text-center mb-5 text-slate-900 dark:text-white">{message}</Text>
                                    <TouchableOpacity activeOpacity={0.7}
                                        className="bg-primary py-1 px-4 rounded-lg active:scale-95 transition-all"
                                        onPress={onClose}
                                    >
                                        <Text className="text-white font-smed text-lg">Close</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </TouchableWithoutFeedback>
                    </BlurView>
                </View>
            </TouchableWithoutFeedback>
        </Modal>
    );
};

export default FeedbackModal;
