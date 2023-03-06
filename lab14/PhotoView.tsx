import { StatusBar } from 'expo-status-bar';
import { useContext } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { ImageContext } from "./ContextStore";

export default function PhotoView() {
    const { image, setImage } = useContext(ImageContext);
    return (
        <View style={styles.container}>
            <Image source={{uri: image}} style={styles.image} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    image: {
        width: '100%',
        height: '100%'
    }
});
