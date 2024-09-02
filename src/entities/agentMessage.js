const { EntitySchema } = require("typeorm");

module.exports = new EntitySchema({
  name: "agentMessage",
  tableName: "agent_message",
  columns: {
    id: {
      type: "int",
      primary: true,
      generated: true,
    },
    agentId: {
      type: "int",
    },
    adminId: {
      type: "int",
      nullable: true,
    },
    messageId: {
      type: "varchar",
    },
    message: {
      type: "text",
    },
    role: {
      type: "varchar",
    },
    created_at: {
      type: "timestamp",
      default: () => "CURRENT_TIMESTAMP",
    },
    updated_at: {
      type: "timestamp",
      default: () => "CURRENT_TIMESTAMP",
      onUpdate: "CURRENT_TIMESTAMP",
    },
  },
  relations: {
    agent: {
      type: "many-to-one",
      target: "agent",
      joinColumn: {
        name: "agentId",
        referencedColumnName: "agentId",
      },
      onDelete: "CASCADE",
    },
    admin: {
      type: "many-to-one",
      target: "adminauth",
      joinColumn: {
        name: "adminId",
        referencedColumnName: "adminId",
      },
      onDelete: "CASCADE",
      nullable: true,
    },
  },
});
