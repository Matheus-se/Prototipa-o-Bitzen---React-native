import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fbfafa',
      alignItems: 'center',
      paddingTop: 15
    },
  
    container_input: {
      width: "90%",
      flex: 1,
      justifyContent: "flex-start",
      marginTop: 23, 
    },
  
    container_descr: {
      width: "90%",
    },
  
    text_container: {
      fontSize: 15,
    },
  
    container_textInput: {
      backgroundColor: "#f1f2f6",
      borderRadius: 12,
      padding: 18,
    },
  
    LoginButton: {
      alignSelf: "center",
      backgroundColor: "#ff2d55",
      width: "100%",
      padding: 20,
      borderRadius: 17,
      textAlign: "center",
      marginTop: 40,
    },
  
    submit_text: {
      color: "#fff",
      textAlign: "center"
    }, 
  
    labels: {
      margin: 12,
      marginTop: 24,
      fontSize: 16,
    },
  });

  export default styles