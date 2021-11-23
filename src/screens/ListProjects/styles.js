import styled from 'styled-components/native';
import { StyleSheet } from 'react-native'
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize'
import { getStatusBarHeight, getBottomSpace } from 'react-native-iphone-x-helper'
import CurrencyInput from 'react-native-currency-input';

export const Container = styled.View`
    flex: 1;
    background-color: #f0f0f5;
`;

export const Header = styled.View`
    padding-top: ${RFValue(16) + getStatusBarHeight()}px;
    padding-left: ${RFValue(20)}px;
    padding-right: ${RFValue(20)}px;
    padding-bottom: ${RFValue(16)}px;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;   
`

export const HeaderTitleContainer = styled.View`
    flex-direction: row;
    align-items: center;
`

export const HeaderTitlePText = styled.Text`
    font-size: ${RFValue(24)}px;
    font-weight: bold;
    color: #ed125a;
`

export const HeaderTitleSText = styled.Text`
    font-size: ${RFValue(14)}px;
`

export const Divider = styled.View`
    border-width: 0.5px;
    border-color: #bfbfbf;
`

export const TopListContainer = styled.View`
    padding-top: ${RFValue(20)}px;
    padding-left: ${RFValue(20)}px;
    padding-right: ${RFValue(20)}px;
`

export const TopList = styled.Text`
    font-size: ${RFValue(20)}px;
    font-weight: bold;
`

export const Content = styled.View`
    flex: 1;
    padding-top: ${RFValue(20)}px;
    padding-left: ${RFValue(20)}px;
    padding-right: ${RFValue(20)}px;
    padding-bottom: ${RFValue(20) + getBottomSpace()}px;
    justify-content: space-between;
`

export const ItemContainer = styled.View`
    background-color: #dbdbdb;
    padding-top: ${RFValue(12)}px;
    padding-left: ${RFValue(12)}px;
    padding-right: ${RFValue(12)}px;
    padding-bottom: ${RFValue(12)}px;
    border-radius: 12px;
    margin-bottom: ${RFValue(12)}px;
`

export const ItemTextTitle = styled.Text`
    font-size: ${RFValue(14)}px;
    font-weight: bold;
    margin-bottom: ${RFValue(8)}px;
    color: #ed125a;
`

export const ItemTextDescription = styled.Text`
    font-size: ${RFValue(12)}px;
    margin-bottom: ${RFValue(6)}px;
`

export const ItemTextPrice = styled.Text`
    font-size: ${RFValue(12)}px;
    font-weight: bold;
    margin-bottom: ${RFValue(8)}px;
    color: #ed125a;
`

export const DonateButtonContainer = styled.View`
    width: 100%;
    align-items:center;
`

export const DonateButton = styled.TouchableOpacity`
    width: 40%;
    background-color: #ed125a;
    align-items: center;
    justify-content: center;
    border-radius: 12px;
`

export const TextButton = styled.Text`
    font-size: ${RFValue(12)}px;
    font-weight: bold;
    padding-top: ${RFValue(8)}px;
    padding-bottom: ${RFValue(8)}px;
    color: white;
`

export const ModalContainer = styled.View`
    background-color: #ffffff;
    padding-top: ${RFValue(20)}px;
    padding-left: ${RFValue(20)}px;
    padding-right: ${RFValue(20)}px;
    padding-bottom: ${RFValue(20)}px;
    border-radius: 12px;
`;

export const ModalTitleContainer = styled.View`
    align-items: center;
`

export const InputPrice = styled(CurrencyInput)`
    padding-top: ${RFValue(16)}px;
    padding-left: ${RFValue(16)}px;
    padding-right: ${RFValue(16)}px;
    padding-bottom: ${RFValue(16)}px;
    background-color: #dbdbdb;
    border-radius: 8px;
    font-size: ${RFValue(14)}px;
    margin-bottom: ${RFValue(8)}px;    
`

export const SubmitButton = styled.TouchableOpacity`
    width: 100%;
    background-color: #ed125a;
    align-items: center;
    justify-content: center;
    border-radius: 12px;
`

export const SubmitTextButton = styled.Text`
    font-size: ${RFValue(16)}px;
    font-weight: bold;
    padding-top: ${RFValue(12)}px;
    padding-bottom: ${RFValue(12)}px;
    color: white;
`