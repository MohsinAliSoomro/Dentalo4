import Layout from '../../components/Layout/Layout';
import Private from '../../components/auth/Private';

const UserIndex = () => {
    return (
        <Layout>
            <Private>
                <div className="container-fluid">
                    <h2>User Dashboard</h2>
                </div>
            </Private>
        </Layout>
    );
};

export default UserIndex;
