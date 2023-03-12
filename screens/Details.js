import { View, Text, Image, SafeAreaView, FlatList } from 'react-native'
import { assets, COLORS, SIZES, SHADOWS, FONTS } from '../constants'
import { CircleButton, RectButton } from '../Components/Button'
import { DetailsBid, FocusedStatusBar } from '../Components'

const DetailsHeader = ({ data, navigation }) => {
    return (
        <View style={{ width: '100%', height: 273 }}>
            <Image
                source={data.image}
                resizeMode='cover'
                style={{ width: '100%', height: '100%' }}
            />
        </View>
    )
}
const Details = ({ route, navigation }) => {
    const { data } = route.params
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <FocusedStatusBar
                barStyle="dark-content"
                backgroundColor="transparent"
                translucent={true}
            />

            <View
                style={{
                    width: "100%",
                    position: "absolute",
                    bottom: 0,
                    paddingVertical: SIZES.font,
                    justifyContent: "center",
                    alignItems: "center",
                    backgroundColor: "rgba(255,255,255,0.5)",
                    zIndex: 1,
                }}
            >
                <RectButton minWidth={170} fontSize={SIZES.large} {...SHADOWS.dark} />
            </View>
            <FlatList
                data={data.bids}
                renderItem={({ item }) => <DetailsBid bid={item} />}
                keyExtractor={(item) => item.id}
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{ paddingBottom: SIZES.extraLarge * 3 }}
                ListHeaderComponent={() => (
                    <>
                        <DetailsHeader data={data} navigation={navigation} />
                    </>
                )}
            />
        </SafeAreaView>
    )
}

export default Details