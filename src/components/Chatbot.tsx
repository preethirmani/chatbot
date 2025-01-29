import React, {useState} from "react";
import { View, Text } from "react-native";
import { GiftedChat, IMessage } from "react-native-gifted-chat";

const Chatbot : React.FC = () => {
  const [message, setMessage] = useState<IMessage>()

  return(
   <View>
      <Text>Chatbot</Text>
   </View>
  )
}

export default Chatbot;