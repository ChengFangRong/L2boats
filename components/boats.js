import {Image, Text, View} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome6";


const Boat = ({name, description, picture}) => {
    return (
        <View>
            <Text></Text>
            <Text style={{fontSize: 24, fontWeight: "bold"}}>
                <Icon name="sailboat" size={30} color="#000" />
                {name}
            </Text>
            <Text>
                {description}
            </Text>
            <Image source={picture} style={{width:400, height:500}}></Image>
            <Text></Text>
        </View>
    );
};

export default Boat;
