import React from 'react';
import styled from 'styled-components';
import logo from '../../images/LOGO_cropped.png';
import { Rotate } from '../Animations';
import Modal from './Modal';
import { DarkOverlay } from '../modals/ModalsSharedComponents';

const ProcessingModal = (props) => {
    return (
        <Modal>
            <DarkOverlay>
                <ModalWrapper>
                    <ModalTitle>Keep on smilin' :)</ModalTitle>
                    <Logo src={logo} alt='לוגו קואלה Kuala Logo' />
                    <ModalSubTitle>
                        We are processing your request...
                    </ModalSubTitle>
                </ModalWrapper>
            </DarkOverlay>
        </Modal>
    );
};

const ModalWrapper = styled.div`
    user-select: none;
    text-align: center;
    font-size: 25px;
    height: 360px;
    width: 560px;
    background-color: #f1f1f1;
    position: relative;
    margin: 0 auto;
    margin-top: 20vh;
    padding: 20px;
    padding-right: 40px;
    padding-left: 40px;
    border-radius: 5px;
`;

const ModalTitle = styled.div`
    position: relative;
    top: 20px;
    font-size: 40px;
    margin: 0 auto;
`;

const ModalSubTitle = styled.div`
    color: ${(props) => props.theme.colors.grayFont};
    position: relative;
    top: 75px;
    font-size: 22px;
    margin: 0 auto;
`;

const Logo = styled.img`
    animation: ${Rotate} 1.5s linear infinite;
    position: relative;
    top: 50px;
    width: 120px;
    height: 120px;
`;

export default ProcessingModal;
