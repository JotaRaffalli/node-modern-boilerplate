import { UserClass, UserType } from './model'
import * as mutations from './mutations'
import { login } from 'server/controllers/auth.controller'

export default {
  Query: {
    /**
     * Returns sanitized User object of the currently logged in user (based on the request JWT)
     */
    user(_) {
      console.log(_)

      return {
        id: 123
      }
    }

    // async login(_, args): Promise<Object> {
    //   validate(args, Joi.object().keys({
    //     email: Joi.string().required(),
    //     password: Joi.string().required()
    //   }))

    //   return {
    //     token: login(args.email, args.password)
    //   }
    // }
  },

  Mutation: {
    async addUser(_, args): Promise<UserType> {
      return mutations.addUser(args)
    },

    async updateUser(_, args): Promise<UserType> {
      // Remove id from args because otherwise it will try to update ID (which is pointless)
      const id = args.id
      delete args.id

      // TODO check that user is logged in

      // TODO have admin graphql also use this mutation

      return mutations.updateUser(id, args)
    }
  }
}
