import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import ClearIcon from '@mui/icons-material/Clear';

const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: 4,
};

const stylex = {
    position: 'relative' as 'relative',
    top: '17%',
    left: '100%',
    transform: 'translate(-50%, -50%)',
    zIndex: 2,
};

type BasicModalProps = {
    children: React.ReactNode,
    open: boolean;
    onClose: () => void;

}


export const BasicModal = ({ children, open, onClose }: BasicModalProps) => {

    return (
        <div>
            <Modal
                open={open}
                onClose={onClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <>
                    <Box sx={style} >
                        <ClearIcon onClick={onClose} sx={stylex} />
                        {children} {/* Renderiza el contenido pasado como children */}
                    </Box>
                </>
            </Modal>
        </div>
    );
};