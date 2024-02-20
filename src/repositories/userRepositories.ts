import  User  from '../database/models/userModels';


const getAll = async () => {
    return await User.query();
  };
  
const getById = async (id: number) => {
return await User.query().findById(id);
};

const getByEmail = async (email: string) => {
return await User.query().findOne({ where: { email } });
};

const create = async (data: Partial<User>) => {
return await User.query().insert(data);
};

const update = async (data: Partial<User>, id: number) => {
return await User.query().findById(id).patch(data);
};

const deleteUser = async (id: number) => {
return await User.query().deleteById(id);
};
  
export default { getAll, getById, getByEmail, create, update, deleteUser };
