import { Button, Input, ModalFooter, Radio, RadioGroup, FormControl, FormLabel, Modal, ModalOverlay, ModalBody, ModalContent, ModalCloseButton, ModalHeader } from "@chakra-ui/react";
import { useContext } from "react";
import { GlobalContext } from "../../Context";



export default function TransactionForm({onClose, isOpen}){

    const {formData, handleFormSubmit, setFormData, value, setValue} = useContext(GlobalContext);

    function handleFormChange(event){
        setFormData({
            ...formData,
            [event.target.name]: event.target.value
        })
    }

    function handleSubmit(event){
        event.preventDefault();
        handleFormSubmit(formData);
    }

    return(
        <Modal isOpen={isOpen} onClose={onClose}>
            <form onSubmit={handleSubmit}>
                <ModalOverlay></ModalOverlay>
                <ModalContent>
                    <ModalHeader>Add New Transaction</ModalHeader>
                    <ModalCloseButton></ModalCloseButton>

                    <ModalBody>
                        <FormControl>
                            <FormLabel>Enter Description</FormLabel>
                            <Input onChange={handleFormChange} placeholder='Enter Transaction Description' name='description' type='text'></Input>
                        </FormControl>
                        <FormControl>
                            <FormLabel>Enter Amount</FormLabel>
                            <Input onChange={handleFormChange} placeholder='Enter Transaction Amount' name='amount' type='number'></Input>
                        </FormControl>
                        <RadioGroup mt={'5'} value={value} onChange={setValue}>
                            <Radio onChange={handleFormChange} checked={formData.type === 'income'} value="income" colorScheme="blue" name="type">Income</Radio>
                            <Radio onChange={handleFormChange} checked={formData.type === 'expense'} value="expense" colorScheme="red" name="type">Expense</Radio>
                        </RadioGroup>
                    </ModalBody>

                    <ModalFooter>
                        <Button mr={'4'} onClick={onClose}>Cancel</Button>
                        <Button onClick={onClose} type="submit">Add</Button>
                    </ModalFooter>

                </ModalContent>
            </form>
        </Modal>
    )
}