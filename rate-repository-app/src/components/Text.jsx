import { Text as NativeText, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  text: {
    fontSize: 16,
    color: '#000',
  },
});

const Text = ({ style, ...props }) => {
  return <NativeText style={[styles.text, style]} {...props} />;
};

export default Text;