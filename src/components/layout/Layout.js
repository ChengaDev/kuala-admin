import React from 'react';
import styled from 'styled-components';
import SideBar from './SideBar';
import { isMobileOnly } from 'react-device-detect';
import ProcessingModal from '../modals/ProcessingModal';
import { useSelector } from 'react-redux';
import { showProcessingModal } from '../../state/modals/selectors';

const Layout = ({ children }) => {
    const shouldShowProcessingModal = useSelector(showProcessingModal);
    const userInteractionEnabled = !isMobileOnly && !shouldShowProcessingModal;

    return (
        <>
            {!isMobileOnly && (
                <SideBar isInteractive={userInteractionEnabled} />
            )}
            <Content
                id='kualaContent'
                isInteractive={userInteractionEnabled}
                isMobile={isMobileOnly}
            >
                {children}
            </Content>
            {shouldShowProcessingModal && !isMobileOnly && <ProcessingModal />}
        </>
    );
};

const Content = styled.div`
    min-height: 100vh;
    height: fit-content;
    margin-left: ${(props) => (props.isMobile ? '0' : '220px')};

    @media screen and (min-width: 1400px) {
        margin-left: 280px;
    }

    ${(props) => !props.isInteractive && `pointer-events: none !important;`}
`;

export default Layout;
