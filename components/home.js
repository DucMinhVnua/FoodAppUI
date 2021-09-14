import React from 'react';
import {StatusBar, SafeAreaView, StyleSheet, Text, View, Image, FlatList, ScrollView, TouchableOpacity } from 'react-native';

// font
import { useFonts } from 'expo-font';

//colors
import colors from '../assets/colors/colors.js'

// image
import profile from '../assets/profile.png';

//icon
import { Entypo } from '@expo/vector-icons';
import { EvilIcons } from '@expo/vector-icons';
import { Fontisto } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';

// data
import categoriesData from '../assets/data/categoriesData.js'
import popularData from '../assets/data/popularData.js'
import { Colors } from 'react-native/Libraries/NewAppScreen';

function HomeScreen({navigation}) {

    const [loaded] = useFonts({
        MontserratBold: require('../assets/fonts/Montserrat-Bold.ttf'),
        MontserratMedium: require('../assets/fonts/Montserrat-Medium.ttf'),
        MontserratRegular: require('../assets/fonts/Montserrat-Regular.ttf'),
    });
    if (!loaded) {
        return null;
    }
    

    const renderItem = ({item}) => {
        return (
            <SafeAreaView 
                style={[
                    styles.categoriesItemWrapper, 
                    {
                        backgroundColor: item.select ? colors.primary : colors.white,
                        marginLeft: item.id == 1 ? 5 : 0
                    }]}
            >
               <Image 
                    source= {item.image}
                    style={styles.imagecategories}
               />
               <Text 
                    style={styles.titlecategories}
                >
                    {item.title}
               </Text>
               <View 
                    style={[styles.iconWrapper, 
                    {
                        backgroundColor: item.select ? colors.white : colors.secondary
                    }]}
               >
                    <Fontisto 
                        style={styles.iconCategories} 
                        name="angle-right" size={8} 
                        color={
                            item.select ? colors.black : colors.white
                        } 
                    />
               </View>
            </SafeAreaView>
        );
    }

    return (
        <>
        <StatusBar style= "dark" hidden={false}/>
        <ScrollView style={styles.container}>
            <SafeAreaView>
                <View style={styles.headerWrapper}>
                    <Image style={styles.profileImage} source={profile}/>
                    <Entypo name="menu" size={24} color={colors.text} />
                </View>
            </SafeAreaView>

            {/* Title */}
            <SafeAreaView style={styles.titlesWrapper}>
                <Text style={styles.foodText}>Food</Text>
                <Text style={styles.foodDelivery}>Delivery</Text>
            </SafeAreaView>

            {/* search */}
            <SafeAreaView style={styles.searchWrapper}>
                <EvilIcons name="search" size={24} color={colors.text} />
                <View style={styles.search}>
                   <Text style={styles.searchText}>Search...</Text> 
                </View>
            </SafeAreaView>

            {/* Categories */}
            <SafeAreaView style={styles.categoriesWrapper}>
            <Text style={styles.categoriesTitle}>Categories</Text>
            <View style={styles.categoriesListWrapper}>
                <FlatList
                    data={categoriesData}
                    renderItem={renderItem}
                    keyExtractor={(item) => item.id}
                    horizontal = {true}
                />
            </View>
            </SafeAreaView>
            
            
            {/* Popular */}
            <SafeAreaView style={styles.popularItemWrapper}>
                <Text style={styles.popularTitle}>Popular</Text>
                {popularData.map((item) => (  
                    <TouchableOpacity
                        key={item.id}
                        onPress={() => navigation.navigate('Detail', {
                            item: item,
                        })}
                    >
                        <View style={styles.popularListWrapper}>
                            <SafeAreaView style={[styles.popularWrapper, {
                                marginTop: item.id == 1 ? 15 : 0
                            }]}>
                                <View style={styles.popularLeftWrapper}>
                                    <View style={styles.titleFirst}>
                                        <FontAwesome5 style={styles.iconCrown} name="crown" size={12} color={colors.primary} />
                                        <Text style={styles.textTitleFirst}>top of the week</Text>
                                    </View>
                                    <View style= {styles.titlePopularWrapper}>
                                        <Text style={styles.titleText}>{item.title}</Text>
                                        <Text style={styles.titleWeight}>Weight {item.weight}</Text>
                                    </View>
                                    <View style={styles.CardWrapper}>
                                        <View style={styles.cardIconPlusWrapper}>
                                            <AntDesign name="plus" size={10} color={Colors.text} />
                                        </View>
                                        <View style={styles.cardIconStartWrapper}>
                                            <AntDesign name="star" size={10} color={Colors.text} />
                                            <Text style={styles.ratingText}>{item.rating}</Text>
                                        </View>
                                    </View>
                                </View>
                                <View style={styles.imgPopularWrapper}>
                                    <Image style={styles.imgPopular} resizeMode={'contain'} source={item.image}/>
                                </View>
                            </SafeAreaView>  
                        </View>         
                    </TouchableOpacity>               
                    )
                )}
            </SafeAreaView>
        </ScrollView>
        </>
    );
}

const title = {
    fontFamily: 'MontserratBold',
    fontSize: 16,
    color: colors.text
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    headerWrapper: {
        flexDirection: 'row',
        marginHorizontal: 20,
        marginTop: 30,
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    profileImage: {
        width: 40,
        height: 40,
        borderRadius: 30
    },
    titlesWrapper: {
        marginTop: 30,
        marginHorizontal: 20
    },
    foodText: {
        fontSize: 16,
        fontFamily: 'MontserratMedium',
        color: colors.text
    },
    foodDelivery: {
        fontSize: 32,
        color: colors.text,
        fontFamily: 'MontserratBold',
        marginTop: 5
    },
    searchWrapper: {
        marginHorizontal: 20,
        marginTop: 36,
        flexDirection: 'row'
    },
    search: {
        borderBottomWidth: 1,
        borderBottomColor: colors.textLight,
        flex: 1,
        marginLeft: 10
    },
    searchText: {
        color: colors.textLight
    },
    categoriesWrapper: {
        marginHorizontal: 20,
        marginTop: 30
    },
    categoriesTitle: {
        ...title
    },
    categoriesItemWrapper: {
        width: 105,
        height: 177,
        backgroundColor: colors.primary,
        marginRight: 20,
        marginTop: 15,
        borderRadius: 20,
        justifyContent: 'space-around',
        alignItems: 'center',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        marginBottom: 10

    },
    imagecategories: {
        width: 60,
        height: 60,
    },
    titlecategories: {
        fontSize: 14,
        fontFamily: 'MontserratMedium',
        color: colors.text
    },
    iconWrapper: {
        borderRadius: 30,
        width: 30,
        height: 30,
        backgroundColor: colors.white,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 10
    },
    iconCategories: {
        fontWeight: 'bold'
    },
    popularItemWrapper: {
        marginHorizontal: 20,
        marginTop: 10
    },
    popularTitle: {
        ...title
    },
    popularListWrapper: {
        
    },
    popularWrapper: {
        paddingTop: 24,
        height: 161,
        borderRadius: 25,
        backgroundColor: colors.white,
        marginBottom: 20,
        flexDirection: 'row',
    },
    popularLeftWrapper: {
        justifyContent: 'space-between'
    },
    iconCrown: {
        marginLeft: 20,
    },
    titleFirst: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 10
    },
    textTitleFirst: {
        fontFamily: 'MontserratBold',
        marginLeft: 10,
        fontSize: 14
    },
    titlePopularWrapper: {
        marginHorizontal: 20,
        marginTop: 20
    },
    titleText: {
        color: colors.text,
        fontFamily: 'MontserratMedium',
        fontWeight: '700',
        fontSize: 14
    },
    titleWeight: {
        color: colors.textLight,
        fontSize: 12,
        fontFamily: 'MontserratRegular',
        marginTop: 10,
    },
    CardWrapper: {
        flexDirection: 'row',
        marginHorizontal: 20,
    },
    cardIconPlusWrapper: {
        width: 90,
        height: 53,
        backgroundColor: colors.primary,
        borderBottomLeftRadius: 25,
        borderTopRightRadius: 25,
        marginLeft: -20,
        justifyContent: 'center',
        alignItems: 'center'
    },
    cardIconStartWrapper: {
        marginLeft: 20,
        flexDirection: 'row',
        alignItems: 'center',
    },
    ratingText: {
        marginLeft: 5,
        fontSize: 12,
        fontFamily: 'MontserratBold'
    },
    imgPopularWrapper: {
        justifyContent: 'center',
        flex: 1
    },
    imgPopular: {
        width: 200,
        height: 125,
    }


});

export default HomeScreen;