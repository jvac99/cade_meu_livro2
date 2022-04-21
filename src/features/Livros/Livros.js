import React, { useState } from 'react';
import './Livros.css';
import Header from '../../containers/Header/Header';
import Section from '../../containers/Section/Section';
import Input from '../../components/Input/Input';
import List from '../../components/List/List';
import Button from '../../components/Button/Button';
import api from '../../_config/api';
import { FaSearch } from 'react-icons/fa';
const title = process.env.REACT_APP_TITLE

const Livros = (props) => {

    const [value1, setValue1] = useState('');
    const {result} = props;


    const fetchData = async (value) => {
        const response = await api.get('/books?name=' + value)
        this.setState({ result: response?.data })
        console.log(typeof (response))
    }

    const handleSubmit = event => {
        setValue1(event.target.value);
        this.fetchData(value1);
        event.preventDefault();
    }

    const onChange1 = event => {
        setValue1(event.target.value);
        event.preventDefault();
    }

    const componentDidMount = async => {
        this.fetchData(value1);
    }

    const inputLabel = '';

    return (
        <div className="Livros">
            <Header title={title}></Header>
            <Section className="search">
                <form onSubmit={handleSubmit}>
                    <Input label={inputLabel} onChange={onChange1} />
                    <Button valor={<FaSearch />} tipo={"submit"} />
                </form>
            </Section>
            <Section>
                <List data={result} />
            </Section>
        </div>
    );


}

export default Livros;