import React, { useState, useEffect } from "react";
import { Ionicons } from '@expo/vector-icons'
import { View, Text, TouchableOpacity, Alert } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import { FlatList } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/core";
import Modal from "react-native-modal";

import { storeProjects, indexProjects } from '../../api';

import { Container, Content, Divider, DonateButton, SubmitTextButton, DonateButtonContainer, Header, HeaderTitleContainer, HeaderTitlePText, HeaderTitleSText, ItemContainer, InputPrice, ItemTextDescription, ItemTextPrice, ItemTextTitle, ModalContainer, ModalTitleContainer, TextButton, TopList, TopListContainer, SubmitButton } from "./styles";

const ListProjects = () => {
    const [data, setData] = useState([])
    const [open, setOpen] = useState(false)
    const [onEditItem, setOnEditItem] = useState({
        id: 0,
        title: '',
        description: '',
        price: 0
    })
    const [price, setPrice] = useState('')

    const { navigate } = useNavigation()

    const handleCalculateNewPrice = () => {
        return onEditItem.price - price
    }

    const handleSelectEditItem = (item) => {
        setOpen(true)
        setOnEditItem(item)
    }

    const handleUpdate = () => {
        if (!price) {
            Alert.alert('A doação não obteve sucesso!', 'Um valor não foi inserido.')
            return
        }
        if (price < 0) {
            Alert.alert('A doação não obteve sucesso!', 'Uma doação não pode ter valor negativo.')
            return
        }
        if (handleCalculateNewPrice() >= 0) {
            const projectEditIndex = data.findIndex((project) => project.id === onEditItem.id)
            if (projectEditIndex != -1) {
                const findProjectItem = data[projectEditIndex];

                const newPrice = handleCalculateNewPrice();

                data.splice(projectEditIndex, 1, {
                    ...findProjectItem,
                    price: newPrice
                });

                storeProjects(data)
                setOpen(false)
                setPrice('')
            }

            Alert.alert('A doação foi feita com successo!', 'Obrigado por doar!')
        }
        else handleDelete()
    }

    const handleDelete = () => {
        storeProjects(data.filter(item => onEditItem !== item))
        setOpen(false)
        setPrice('')
        Alert.alert('Sua doação foi feita com sucesso!', 'Esse projeto obteve sucesso! Obrigado por doar!')

    }

    useEffect(() => {
        indexProjects(setData)
    }, [])

    const renderItem = ({ item }) => {
        return (
            <ItemContainer>
                <ItemTextTitle>{item.title}</ItemTextTitle>
                <ItemTextDescription>{item.description}</ItemTextDescription>
                <ItemTextPrice>{item.price.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}</ItemTextPrice>
                <DonateButtonContainer>
                    <DonateButton onPress={() => handleSelectEditItem(item)}>
                        <TextButton>Doar</TextButton>
                    </DonateButton>
                </DonateButtonContainer>
            </ItemContainer>
        )
    }

    return (
        <Container>
            <Modal isVisible={open}>
                <ModalContainer>
                    <TouchableOpacity onPress={() => setOpen(false)}>

                        <Ionicons name='close' size={RFValue(24)} color='#ed125a' />
                    </TouchableOpacity>
                    <ModalTitleContainer>
                        <ItemTextTitle>{onEditItem.title}</ItemTextTitle>
                    </ModalTitleContainer>
                    <ItemTextDescription>{onEditItem.description}</ItemTextDescription>
                    <ItemTextPrice>{onEditItem.price.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}</ItemTextPrice>
                    <ItemTextDescription>Quanto deseja doar?</ItemTextDescription>
                    <InputPrice
                        value={price}
                        onChangeValue={setPrice}
                        placeholder='Preço'
                        prefix="R$"
                        delimiter=","
                        separator="."
                        precision={2} />
                    <DonateButtonContainer>
                        <SubmitButton onPress={() => handleUpdate()}>
                            <SubmitTextButton>Doar</SubmitTextButton>
                        </SubmitButton>
                    </DonateButtonContainer>
                </ModalContainer>
            </Modal>
            <Header>
                <HeaderTitleContainer >
                    <HeaderTitlePText>Slashi </HeaderTitlePText>
                    <HeaderTitleSText>Foods</HeaderTitleSText>
                </HeaderTitleContainer>
                <TouchableOpacity onPress={() => { navigate('AddProjects') }}>
                    <Ionicons name='add' size={RFValue(24)} color='#ed125a' />
                </TouchableOpacity>
            </Header>
            <Divider />
            <TopListContainer>
                <TopList>Projetos</TopList>
            </TopListContainer>
            <Content>
                <FlatList
                    data={data}
                    keyExtractor={(item) => item.id}
                    renderItem={renderItem}
                />
            </Content>
        </Container>
    )
}

export default ListProjects;