import React, { useState, useEffect } from "react";
import { Ionicons } from '@expo/vector-icons'
import { View, Text, TouchableOpacity, Alert } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import { useNavigation } from "@react-navigation/core";

import { storeProjects, indexProjects } from '../../api';

import { Container, Divider, Header, HeaderTitle, HeaderTitleContainer, HeaderTitlePText, HeaderTitleSText, InputContainer, SubmitButton, TextButton, TopList, TopListContainer, Content, Input, InputPrice } from "./styles";

const ListProjects = () => {
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [price, setPrice] = useState('')
    const [data, setData] = useState([])

    const { navigate } = useNavigation()

    const handleSubmit = () => {
        if (title && description && price) {
            storeProjects([...[{ id: Math.random(), title, description, price }], ...data])
            Alert.alert('Seu projeto foi criado!', 'Aguarde por doações.')
            navigate('ListProjects')
        } else {
            Alert.alert('Seu projeto não foi criado.', 'Um valor não foi inserido.')
        }
    }

    useEffect(() => {
        indexProjects(setData)
    }, [])

    return (
        <Container>
            <Header>
                <TouchableOpacity onPress={() => { navigate('ListProjects') }}>
                    <Ionicons name="arrow-back" size={RFValue(24)} color='#ed125a' />
                </TouchableOpacity>
                <HeaderTitle>
                    Adicionar Projeto
                </HeaderTitle>

            </Header>
            <Content>
                <InputContainer >
                    <Input
                        value={title}
                        onChangeText={setTitle}
                        placeholder='Titulo'
                    />
                    <Input
                        value={description}
                        onChangeText={setDescription}
                        placeholder='Descrição'
                        multiline
                    />
                    <InputPrice
                        value={price}
                        onChangeValue={setPrice}
                        placeholder='Preço'
                        prefix="R$"
                        delimiter=","
                        separator="."
                        precision={2} />
                </InputContainer>
                <SubmitButton onPress={handleSubmit}>
                    <TextButton>Enviar</TextButton>
                </SubmitButton>
            </Content>
        </Container>
    )
}

export default ListProjects;