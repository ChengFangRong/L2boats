import {Image, StyleSheet, Text, View} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome6";

const styles = StyleSheet.create({

    item: {
        paddingTop: 30,
        paddingBottom: 20,
        borderWidth: 2,
        backgroundColor: 'lightgrey',
        paddingLeft: 10,
        paddingRight: 10,
    },

    title: {
        backgroundColor: 'grey',
        textAlign: 'center',
        color: 'white',
        fontSize: 24,
        fontWeight: "bold",
        padding: 5,
        marginBottom: 20,
    },

    description: {
        paddingLeft: 10,
        paddingRight: 10,
        borderWidth: 2,
        borderColor: 'grey',
        marginBottom: 20,
        backgroundColor: 'white',
    }
});


const Boat = ({name, description, picture}) => {
    return (
            <View style={[styles.item]}>
            <Text></Text>
            <Text style={[styles.title]}>
                <Icon name="sailboat" size={30} color="#000" />
                {name}
            </Text>
            <Text style={[styles.description]}>
                {description}
            </Text>
            <Image source={picture} style={{width:355, height:450}}></Image>
            <Text></Text>
            </View>
    );
};

export default Boat;
