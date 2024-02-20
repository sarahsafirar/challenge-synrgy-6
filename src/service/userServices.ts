import UserRepository from "../repositories/userRepositories";

const UserService = {
  userById: async (id: number) => {
    return await UserRepository.getById(id);
  },

  userByEmail: async (email: string) => {
    return await UserRepository.getByEmail(email);
  },

  createUser: async (data: any) => {
    return await UserRepository.create(data);
  },
};

export default UserService;
