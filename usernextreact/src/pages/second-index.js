import React, { useState } from 'react';
import Head from 'next/head';
import Table from '../components/Table';
import { fetchUsers } from '../apis/api';

const columns = ['name', 'email', 'address.city', 'phone', 'website', 'company.name'];

const SecondPage = ({ users }) => {
    const [showTable, setShowTable] = useState(false);

    const handleClick = () => {
        setShowTable(true);
    };

    return (
        <div>
            <Head>
                <title>Second Page</title>
            </Head>
            <h1>Second Page</h1>
            <button onClick={handleClick}>Show Table</button>
            {showTable && <Table columns={columns} data={users} />}
        </div>
    );
};

export const getServerSideProps = async () => {
    const users = await fetchUsers();
    return { props: { users } };
};

export default SecondPage;