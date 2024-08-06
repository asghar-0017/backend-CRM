const dataSource = require("../infrastructure/psql");
const { logger } = require("../../logger");
const Lead=require('../entities/lead')

const leadRepository = {
findByEmail: async (email) => {
        return await dataSource.getRepository(Lead).findOne({ where: { email } });
      },

  saveLead: async (lead) => {
    return await dataSource.getRepository(Lead).save(lead);
  },
  getLeadData:async()=>{
    try{
        return await dataSource.getRepository(Lead).find()

    }catch(error){
        throw error
    }
  }
};

module.exports = leadRepository;
