import { View } from 'react-native';
import { Feather } from '@expo/vector-icons';

import { styles } from './styles';
import { Input } from '@/app/components/input';
import { theme } from '@/theme';

export function Home() {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Input style={styles.Input}>
                    <Input.Field
                        placeholder="Pesquisar pelo nome..."
                    />
                    <Feather
                        name="x"
                        size={16}
                        color={theme.colors.gray_300}
                    />
                </Input>
            </View>
        </View>
    );
}
