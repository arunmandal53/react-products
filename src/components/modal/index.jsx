/* eslint-disable react/prop-types */
import { useEffect, useRef } from "react";

import CloseIcon from './assets/close-circle.svg';

import styles from './index.module.scss';

const Modal = (props) => {
    const {
        children,
        showModal,
        setShowModal,
        title,
    } = props;

    const modal = useRef();

    useEffect(()=>{
        const fun = () => {
            window.onclick = function(event) {
                if (event.target == modal.current) {
                    setShowModal(!showModal)
                }
            }
        }
        fun()
        return function cleanup () {
            fun();
        }
        
    },[setShowModal, showModal])
    
    return (
        <>
        {
            showModal? (
                <div className={styles.modal} ref={modal}>
                    <div className={styles.modalContent}>
                        <div className={styles.modalHeader}>
                            <div className={styles.headerText}>
                                {title}
                            </div>
                            <img src={CloseIcon} onClick={()=>setShowModal(!showModal)} style={{cursor:'pointer'}}/>
                        </div>
                        <div className={styles.modalBody}>
                            {children}
                        </div>
                    </div>
                </div>
            ):''
        }
        </>
    )
}

export default Modal;