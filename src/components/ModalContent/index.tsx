import React from 'react';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { Box } from '@mui/material';
import { useMedia } from 'react-use';

interface ModalContent {
  handleToCleanCart?: any;
  handleCloseModal: () => void;
  open: boolean;
  title: React.ReactNode;
  children: React.ReactNode;
}

export const ModalContent: React.FC<ModalContent> = ({
  handleToCleanCart,
  handleCloseModal,
  open,
  title,
  children,
}) => {
  const isMobile = useMedia('(max-width: 1200px)');

  return (
    <>
      <Modal
        open={open}
        onClose={handleCloseModal}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          sx={{
            position: 'absolute',
            top: '50%',
            left: isMobile ? '5%' : '50%',
            transform: isMobile
              ? 'translate(0%, -50%)'
              : 'translate(-50%, -50%)',
            width: isMobile ? '90%' : '100%',
            maxWidth: isMobile ? '100%' : 700,
            bgcolor: 'background.paper',
            boxShadow: 24,
            p: 4,
            borderRadius: 2,
          }}
        >
          <Typography
            id="modal-modal-title"
            variant="h6"
            component="h2"
            sx={{ textAlign: 'center' }}
          >
            {title}
          </Typography>

          {children}
        </Box>
      </Modal>
    </>
  );
};
