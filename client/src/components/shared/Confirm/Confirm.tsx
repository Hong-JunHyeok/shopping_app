import React from "react";
import Modal from "../Modal";

import * as styles from './Confirm.styles';

interface Props {
    title?: string;
    content: React.ReactNode | string;
    open?: boolean;
    onConfirm?: () => void;
    onCancel?: () => void;
}

const Confirm = ({ 
    title,
    content, 
    open = true,
    onConfirm,
    onCancel
}: Props) => {
    const handleConfirmButton = () => {
        if (onConfirm) onConfirm();
    }

    const handleCancelButton = () => {
        if (onCancel) onCancel();
    }

    if (!open) return null;

    return (
        <Modal>
            <styles.ConfirmTitle>
                {title}
            </styles.ConfirmTitle>

            <styles.ConfirmContent>
                {content}
            </styles.ConfirmContent>

            <styles.ButtonGroup>
                <button type="button" onClick={handleCancelButton}>취소</button>
                <button type="button" onClick={handleConfirmButton}>확인</button>
            </styles.ButtonGroup>
        </Modal>
    )
}

export default Confirm;
