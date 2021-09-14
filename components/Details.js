import React from 'react';
import {StatusBar, SafeAreaView, StyleSheet, Text, View, Image, FlatList, ScrollView, TouchableOpacity, Alert } from 'react-native';

// font
import { useFonts } from 'expo-font';

// colors
import colors from '../assets/colors/colors.js'

// icon
import { AntDesign } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';

function DetailsScreen({navigation, route}) {

    // font
    const [loaded] = useFonts({
        MontserratBold: require('../assets/fonts/Montserrat-Bold.ttf'),
        MontserratMedium: require('../assets/fonts/Montserrat-Medium.ttf'),
        MontserratRegular: require('../assets/fonts/Montserrat-Regular.ttf'),
    });

    // data item
    const {item} = route.params;

    // renderItem
    
    const renderItem = ({item}) => {
        return (
            <View style={styles.imgIngredientsWrapper}>
                <Image style={styles.imgIngredients} source={item.image}/>
            </View>
        )
    }

    return (
        <ScrollView style={styles.container}>
            <StatusBar style= "dark" hidden={false}/>
            <StatusBar style= "dark"/>
            <SafeAreaView style={styles.headerWrapper}>
                <TouchableOpacity
                    onPress={() => navigation.navigate('Home')}
                >
                    <View style={styles.wrapperIconLeft}>
                        <AntDesign name="left" size={11} color={colors.black} />
                    </View>
                </TouchableOpacity>
                <View style={styles.wrapperIconRight}>
                    <AntDesign name="star" size={11} color={colors.white} />
                </View>
            </SafeAreaView>

            {/* Title */}
            <View style={styles.titleWrapper}>
                <Text style={styles.titleText}>{item.title}</Text>
            </View>

            {/* price */}
            <View style = {styles.priceWrapper}>
                <Text style={styles.priceText}>${item.price}</Text>
            </View>

            {/* content */}
            <SafeAreaView style={styles.contentWrapper}>
                <View style={styles.contentLeftWrapper}>
                    <View style={[styles.sizeWrapper]}>
                        <Text style={styles.textTitleSize}>Size</Text>
                        <Text style={styles.textSize}>{item.sizeName} {item.sizeNumber}"</Text>
                    </View>
                    <View style={styles.crustWrapper}>
                        <Text style={styles.textTitleCrust}>Crust</Text>
                        <Text style={styles.textCrust}>{item.crust}</Text>
                    </View>
                    <View style={styles.TimeWrapper}>
                        <Text style={styles.textTitleTimee}>Delivery in</Text>
                        <Text style={styles.textTime}>{item.deliveryTime} min</Text>
                    </View>
                </View>
                <View style={styles.contentRightWrapper}>
                    <Image source={item.image} />
                </View>
            </SafeAreaView>

            {/* Ingredients */}
            <SafeAreaView style={styles.ingredientWrapper}>
                <Text style={styles.titleIngredients}>Ingredients</Text>
                <FlatList 
                    data={item.topings}
                    renderItem={renderItem}
                    keyExtractor={(item) => item.id}
                    horizontal = {true}
                />
            </SafeAreaView>

            {/* Button order */}
            <TouchableOpacity
                onPress = {() => Alert.alert("Your order have been places ❤️")}
            >
                <View style={styles.btnWrapper}>
                    <Text style={styles.btnText}>Place an order</Text>
                    <Entypo style={styles.iconBtn} name="chevron-right" size={16} color={colors.text} />
                </View>
            </TouchableOpacity>
        </ScrollView>
    ); 
}

const textContent = {
    fontSize: 16,
    fontFamily: 'MontserratBold',
    color: colors.text
}

const textTitle = {
    fontSize: 14,
    fontFamily: 'MontserratRegular',
    color: colors.textLight
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 30,
    },
    headerWrapper: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginHorizontal: 20
    },
    wrapperIconLeft: {
        borderWidth: 1,
        borderColor: colors.textLight,
        paddingHorizontal: 13,
        paddingVertical: 14,
        borderRadius: 10
    },
    wrapperIconRight: {
        backgroundColor: colors.primary,
        paddingHorizontal: 14,
        paddingVertical: 14,
        borderRadius: 10
    },
    titleWrapper: {
        marginHorizontal: 20,
        marginTop: 30,
        width: '70%'
        
    },
    titleText: {
        fontSize: 32,
        fontFamily: 'MontserratBold',
        color: colors.text
    },
    priceWrapper: {
        marginHorizontal: 20,
        marginTop: 20,
    },
    priceText: {
        fontSize: 32,
        fontFamily: 'MontserratBold',
        color: colors.price
    },
    contentWrapper: {
        flexDirection: 'row'
    },
    contentLeftWrapper: {
        flex: 1
    },
    sizeWrapper: {
        marginTop: 30,
        marginHorizontal: 20
    },
    textTitleSize: {
        ...textTitle
    },
    textSize: {
        ...textContent
    },
    crustWrapper: {
        marginTop: 20,
        marginHorizontal: 20
    },
    textTitleCrust: {
        ...textTitle
    },
    textCrust: {
        ...textContent
    },
    TimeWrapper: {
        marginTop: 20,
        marginHorizontal: 20
    },
    textTitleTimee: {
        ...textTitle
    },
    textTime: {
        ...textContent
    },
    contentRightWrapper: {
        flex: 1.5,
        justifyContent: 'center',
        paddingTop: 30,
    },
    ingredientWrapper: {
        marginHorizontal: 20,
        marginTop: 45
    },
    titleIngredients: {
        fontSize: 16,
        fontFamily: 'MontserratBold', 
    },
    imgIngredientsWrapper: {
        marginTop: 15,
        marginRight: 25
    },
    imgIngredients: {
        width: 80,
        height: 80,
        resizeMode: 'contain'
    },
    btnWrapper: {
        marginHorizontal: 20,
        marginTop: 60,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
        backgroundColor: colors.primary,
        borderRadius: 50,
        paddingVertical: 23,
        marginBottom: 24,
    },
    btnText: {
        color: colors.text,
        fontSize: 14,
        fontFamily: 'MontserratBold',
        marginRight: 5
    },
    iconBtn: {
        marginTop: 1
    },

})

export default DetailsScreen;