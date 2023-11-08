const client = require('../config/db');
const AdminDatamapper = require('./admin.datamapper');
const Ability = require('./ability.datamapper');
const Pokemon = require('./pokemon.datamapper');
const Type = require('./type.datamapper');
const Team = require('./team.datamapper');
const Gen = require('./gen.datamapper');
const User = require('./user.datamapper');
const TeamHasPokemon = require('./teamHasPokemon.datamapper');
const PokemonHasAbility = require('./pokemonHasAbility.datamapper');
const UserHasFavorite = require('./userHasFavorite.datamapper');

module.exports = {
  admi: new AdminDatamapper(client),
  userHasFavo: new UserHasFavorite(client),
  pokeHasAbi: new PokemonHasAbility(client),
  aby: new Ability(client),
  teamHasPokemon: new TeamHasPokemon(client),
  user: new User(client),
  type: new Type(client),
  poke: new Pokemon(client),
  team: new Team(client),
  gen: new Gen(client),

};
