import React from 'react';
import Head from 'next/head';
import Table from '../components/Table';
import { fetchUsers } from '../apis/api';

const columns = ['name', 'email', 'address.city', 'phone', 'website', 'company.name'];

const HomePage = ({ users }) => {
    return (
        <div>
            <Head>
                <title>Home Page</title>
            </Head>
            <h1>Home Page</h1>
            <Table columns={columns} data={users} />
            <a href="/second-index">Load Second Page</a>
        </div>
    );
};

export const getServerSideProps = async () => {
    const users = await fetchUsers();
    return { props: { users } };
};

export default HomePage;