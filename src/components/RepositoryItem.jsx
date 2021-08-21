import React from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';
import RepositoryItemImage from './RepositoryItemimage';

//Esimerkki
//https://snack.expo.dev/@kalleilv/3d045d

const itemStyles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        paddingTop: 10,
        backgroundColor: '#ecf0f1',
        padding: 8,
    },
});

const itemHeaderStyles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        flexGrow: 1, 
        // justifyContent: 'space-around',
        // alignItems:'left',
        // justifyContent:'left'
    },
    //   image: {
    //     width: 45,
    //     height: 45,
    //     borderRadius: 45 / 2,
    //   },
    image: { 
        flexGrow: 0,
        // paddingRight: 15, 
        alignItems:'left',
        justifyContent:'left' 
        // width: 50,
        // height: 50,
        // borderRadius: 45 / 2,
    },
    // infocontainer: { 
    //     flexGrow: 0,
    //     padding: 110, 
    //     margin: 110, 
    //     borderColor: 'red',
    //     borderStyle: 'solid',
    //     borderWidth: 2,
    //     width: 30,
    // },
    info: { 
        justifyContent: 'space-around', 
        marginLeft: 15,
        flexGrow: 1,  
    },

});


const itemFooterStyles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        flexGrow: 1,
        justifyContent: 'space-around',
    },
    // actionTouchable: {
    //   flexGrow: 0,
    // },
    // actionText: {
    //   textDecorationLine: 'underline',
    // },
});


const RepositoryItem = (item) => {
    return (
        <>
            <View style={itemStyles.container}>
                <RepositoryItemHeader item={item}></RepositoryItemHeader>
                <RepositoryItemFooter item={item}></RepositoryItemFooter> 
            </View>
        </>
    );
};


{/* <RepositoryItemHeader item={item}></RepositoryItemHeader> */ }
const RepositoryItemHeader = (props) => {
    const item = props.item;
    return (
        <>
            <View style={itemHeaderStyles.container}>
                <View style={itemHeaderStyles.container.image}>
                    <RepositoryItemImage url={item.item.ownerAvatarUrl}></RepositoryItemImage>
                </View>
                <View style={itemHeaderStyles.container.infocontainer}> 
                    <View style={itemHeaderStyles.container.info}>
                        <Text><b>{item.item.fullName}</b></Text>
                        <Text>{item.item.description}</Text>
                        {/* <Text>{item.item.language}</Text> */}
                        <Button
                            title={item.item.language}
                            onPress={() => console.log('Button pressed')}
                        />
                    </View>
                </View>
            </View>
        </>
    );
};

const RepositoryItemFooter = (props) => {
    const item = props.item;

    // console.log('item ', item);

    return (
        <>
            <View style={itemFooterStyles.container}>
                <Text>Stars: {item.item.stargazersCount}</Text>
                <Text>Forks: {item.item.forksCount}</Text>
                <Text>Reviews: {item.item.reviewCount}</Text>
                <Text>Rating: {item.item.ratingAverage}</Text>
            </View>
        </>
    );
};


export default RepositoryItem;



{/* <Text>Full name: {item.item.fullName}</Text> 
            <Text>Description: {item.item.description}</Text> 
            <Text>Language: {item.item.language}</Text> 
            <Text>Forks: {item.item.forksCount}</Text>  
            <Text>Stars: {item.item.stargazersCount}</Text> 
            <Text>Rating: {item.item.ratingAverage}</Text> 
            <Text>Reviews: {item.item.reviewCount}</Text>  */}

// https://snack.expo.dev/@kalleilv/3d045d

// const CardHeader = () => {
//     return (
//       <View style={cardHeaderStyles.container}>
//         <View style={cardHeaderStyles.avatarContainer}>
//           <Image style={cardHeaderStyles.avatar} source={require('../assets/avatar.png')} />
//         </View>
//         <View style={cardHeaderStyles.infoContainer}>
//           <Text fontWeight="bold" fontSize="subheading">John Doe</Text>
//           <Text color="textSecondary">Thursday 16.4. at 10:08</Text>
//         </View>
//       </View>
//     );
//   };

//   const cardBodyStyles = StyleSheet.create({
//     container: {
//       paddingVertical: 15,
//     }
//   });

//   const CardBody = () => {
//     return (
//       <View style={cardBodyStyles.container}>
//         <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sodales molestie nisl, a elementum leo congue tempor. Aliquam erat volutpat. Aenean id pharetra orci.
//         </Text>
//       </View>
//     );
//   };

//   const cardFooterStyles = StyleSheet.create({
//     container: {
//       flexDirection: 'row',
//       flexGrow: 1,
//       justifyContent: 'space-around',
//     },
//     actionTouchable: {
//       flexGrow: 0,
//     },
//     actionText: {
//       textDecorationLine: 'underline',
//     },
//   });

//   const CardFooterAction = ({ children, ...props }) => {
//     return (
//       <TouchableWithoutFeedback style={cardFooterStyles.actionTouchable} {...props}>
//         <Text color="textSecondary" style={cardFooterStyles.actionText}>{children}</Text>
//       </TouchableWithoutFeedback>
//     )
//   };

//   const CardFooter = () => {
//     return (
//       <View style={cardFooterStyles.container}>
//         <CardFooterAction>
//           Like
//         </CardFooterAction>
//         <CardFooterAction>
//           Comment
//         </CardFooterAction>
//         <CardFooterAction>
//           Share
//         </CardFooterAction>
//       </View>
//     );
//   };

//   const cardStyles = StyleSheet.create({
//     container: {
//       alignItems: 'stretch',
//     },
//   });

//   const Card = () => {
//     return (
//       <View style={cardStyles.container}>
//         <CardHeader />
//         <CardBody />
//         <CardFooter />
//       </View>
//     );
//   };

//   export default Card;
