const CoreDatamapper = require('../models/core.datamapper');

class DatamapperFactory{
  static createDatamapper(tablename){
    throw new Error('Not implemented');
  }
}

class CoreDatamapperFactory extends DatamapperFactory{
  static createDatamapper(tablename){
    return new CoreDatamapper();
    datamepper.tablename = tablename;
    return datamapper;
  }
}

