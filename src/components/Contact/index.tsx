import React, { useRef, useEffect, useState } from 'react'
import emailjs from '@emailjs/browser'
import { Button, FormControl, FormLabel, Input, Textarea } from '@chakra-ui/react';

const Contact = () => {
    const emailRef = useRef<HTMLInputElement>(null);
    const nameRef = useRef<HTMLInputElement>(null);
    const [loading, setLoading] = useState<boolean>(false);

    useEffect(() => emailjs.init("Olsev5DtTdwvneSxV"), [])

    const handleSubmit = async (e) => {
        e.preventDefault();

        const serviceId = "service_ux7anhh"
        const templateId = "contact_form"

        try {
            setLoading(true)
            await emailjs.send(serviceId, templateId, {
                from_name: nameRef.current?.value, 
                recipient: emailRef.current?.value 
            });
            alert("Email successfully sent!")
        } catch(error) {
            console.log(error)
        }
        finally {
            setLoading(false)
        }
    }

    return (
        <FormControl onSubmit={handleSubmit}>
            <FormLabel>Name</FormLabel>
            <Input ref={nameRef} type="text" name="user_name" />
            <FormLabel>Email</FormLabel>
            <Input ref={emailRef} type="email" name="user_email" />
            <FormLabel>Message</FormLabel>
            <Textarea name="message" />
            <Button isLoading={loading}>Send!</Button>
        </FormControl>
    )
}

export default Contact;