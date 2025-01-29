import React, { useState, useEffect, useCallback } from "react";
import {  StyleSheet, KeyboardAvoidingView, Platform } from "react-native";
import { Bubble, GiftedChat, IMessage } from "react-native-gifted-chat";


const Chat : React.FC = () => {
  const [messages, setMessages] = useState<IMessage[]>([])
  useEffect(() => {
    setMessages([
      {
        _id : 1,
        text : 'Hello, How can I help you?',
        createdAt : new Date(),
        user : {
          _id : 2,
          name : 'Bot',
          avatar : 'https://placeimg.com/140/140/any'
        }
      }
    ]);
  }, [])

  const onSend = useCallback((newMessages : IMessage[] = []) => {
    setMessages((prevMessages) => GiftedChat.append(prevMessages, newMessages))
  }, [])

  return(
      <KeyboardAvoidingView 
      behavior={Platform.OS === 'ios' ?  "padding" : "height"}
      style = {styles.container}
      >

          <GiftedChat 
            messages={messages}
            onSend={(newMessages) => onSend(newMessages)}
            user = {{_id : 1}}
            renderBubble={(props) => (
              <Bubble 
              {...props}
              wrapperStyle={{
                right : {backgroundColor : '#0078ff'}, //usermessage in blue
                left : {backgroundColor : '#e0e0e0'} // Botmessage grey
              }}
              textStyle = {{
                right: { color: "#fff" },
                left : {color: "#000"}
              }}
              />
            )}
          />
      </KeyboardAvoidingView>
   
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    
  },
});

export default Chat;