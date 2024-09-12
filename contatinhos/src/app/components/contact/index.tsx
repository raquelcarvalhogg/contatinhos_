import { Text, TouchableOpacity } from 'react-native'
import{ styles } from './styles'
import { Avatar } from '../avatar'

export function Contact(){
    return<TouchableOpacity style={styles.container}
    >
        <Avatar name="Rachel" image={require("@/assets/avatar.jpeg")} />
        <Text style={styles.name}>Rachel</Text>
    </TouchableOpacity>
}
