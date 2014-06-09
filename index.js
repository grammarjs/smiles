
/**
 * Module dependencies.
 */

var Grammar = require('grammarjs-grammar');
var Token = require('grammarjs-token');
var punctuation = require('grammarjs-punctuation');
var grammar = new Grammar('smiles');
var rule = grammar.expression;
var value = Token.value;
var passthrough = Token.passthrough;

/**
 * Expose `grammar`.
 */

module.exports = grammar;

/**
 * Smiles.
 */

rule('smiles')
  .match(':chain', passthrough); //, ':terminator');

/**
 * Plugins.
 */

grammar.use(punctuation());

/**
 * Atom chain.
 */

rule('chain')
  .match(':atom.branched', passthrough)
  .match(':chain', ':atom.branched', passthrough)
  .match(':chain', ':bond', ':atom.branched', passthrough)
  .match(':chain', ':punctuation.period', ':atom.branched', passthrough);

/**
 * Atom.
 */

rule('atom')
  .match(':atom.bracket', passthrough)
  .match(':organic.aliphatic', passthrough)
  .match(':organic.aromatic', passthrough)
  .match('*', value);

/**
 * Branch atoms.
 */

rule('atom.branched')
  .match(':atom', ':bond.ring*', ':branch*', passthrough);

/**
 * Bracket atoms.
 */

rule('atom.bracket')
  .match(
    ':punctuation.bracket.square.begin',
    ':isotope?',
    ':symbol',
    ':chiral?',
    ':hcount?',
    ':charge?',
    ':class?',
    ':punctuation.bracket.square.end',
    passthrough);

/**
 * Aliphatic organic compound.
 */

rule('organic.aliphatic')
  .match('B', value)
  .match('C', value)
  .match('N', value)
  .match('O', value)
  .match('S', value)
  .match('P', value)
  .match('F', value)
  .match('Cl', value)
  .match('Br', value)
  .match('I', value);

/**
 * Aromatic organic compounds.
 */

rule('organic.aromatic')
  .match('b', value)
  .match('c', value)
  .match('n', value)
  .match('o', value)
  .match('s', value)
  .match('p', value);

/**
 * Symbol.
 */

rule('symbol')
  .match(':symbol.element', passthrough)
  .match(':symbol.aromatic', passthrough)
  .match('*', value);

/**
 * Periodic table of elements.
 */

rule('symbol.element')
  .match('H', value)
  .match('He', value)
  .match('Li', value)
  .match('Be', value)
  .match('B', value)
  .match('C', value)
  .match('N', value)
  .match('O', value)
  .match('F', value)
  .match('Ne', value)
  .match('Na', value)
  .match('Mg', value)
  .match('Al', value)
  .match('Si', value)
  .match('P', value)
  .match('S', value)
  .match('Cl', value)
  .match('Ar', value)
  .match('K', value)
  .match('Ca', value)
  .match('Sc', value)
  .match('Ti', value)
  .match('V', value)
  .match('Cr', value)
  .match('Mn', value)
  .match('Fe', value)
  .match('Co', value)
  .match('Ni', value)
  .match('Cu', value)
  .match('Zn', value)
  .match('Ga', value)
  .match('Ge', value)
  .match('As', value)
  .match('Se', value)
  .match('Br', value)
  .match('Kr', value)
  .match('Rb', value)
  .match('Sr', value)
  .match('Y', value)
  .match('Zr', value)
  .match('Nb', value)
  .match('Mo', value)
  .match('Tc', value)
  .match('Ru', value)
  .match('Rh', value)
  .match('Pd', value)
  .match('Ag', value)
  .match('Cd', value)
  .match('In', value)
  .match('Sn', value)
  .match('Sb', value)
  .match('Te', value)
  .match('I', value)
  .match('Xe', value)
  .match('Cs', value)
  .match('Ba', value)
  .match('Hf', value)
  .match('Ta', value)
  .match('W', value)
  .match('Re', value)
  .match('Os', value)
  .match('Ir', value)
  .match('Pt', value)
  .match('Au', value)
  .match('Hg', value)
  .match('Tl', value)
  .match('Pb', value)
  .match('Bi', value)
  .match('Po', value)
  .match('At', value)
  .match('Rn', value)
  .match('Fr', value)
  .match('Ra', value)
  .match('Rf', value)
  .match('Db', value)
  .match('Sg', value)
  .match('Bh', value)
  .match('Hs', value)
  .match('Mt', value)
  .match('Ds', value)
  .match('Rg', value)
  .match('La', value)
  .match('Ce', value)
  .match('Pr', value)
  .match('Nd', value)
  .match('Pm', value)
  .match('Sm', value)
  .match('Eu', value)
  .match('Gd', value)
  .match('Tb', value)
  .match('Dy', value)
  .match('Ho', value)
  .match('Er', value)
  .match('Tm', value)
  .match('Yb', value)
  .match('Lu', value)
  .match('Ac', value)
  .match('Th', value)
  .match('Pa', value)
  .match('U', value)
  .match('Np', value)
  .match('Pu', value)
  .match('Am', value)
  .match('Cm', value)
  .match('Bk', value)
  .match('Cf', value)
  .match('Es', value)
  .match('Fm', value)
  .match('Md', value)
  .match('No', value)
  .match('Lr', value);

/**
 * Aromatic symbols.
 */

rule('symbol.aromatic')
  .match('c', value)
  .match('n', value)
  .match('o', value)
  .match('p', value)
  .match('s', value)
  .match('se', value)
  .match('as', value);

/**
 * Isotope.
 */

rule('isotope')
  .match(/\d+/, value);

/**
 * Chiral.
 */

rule('chiral')
  .match('@', value)
  .match('@@', value)
  .match('@TH1', value)
  .match('@TH2', value)
  .match('@AL1', value)
  .match('@AL2', value)
  .match('@SP1', value)
  .match('@SP2', value)
  .match('@SP3', value)
  .match('@TB1', value)
  .match('@TB2', value)
  .match('@TB3', value)
  .match('@TB29', value)
  .match('@TB30', value)
  .match('@OH1', value)
  .match('@OH2', value)
  .match('@OH3', value)
  .match('@OH29', value)
  .match('@OH30', value);

/**
 * Hydrogen count.
 */

rule('hcount')
  .match('H', value)
  .match('H', ':literal.digit', passthrough);

/**
 * Charge.
 */

rule('charge')
  .match('-', value)
  .match('-', ':literal.digit', passthrough)
  .match('+', value)
  .match('+', ':literal.digit', passthrough);

/**
 * Bond.
 */

rule('bond')
  .match('-', value)
  .match('=', value)
  .match('#', value)
  .match('$', value)
  .match(':', value)
  .match('/', value)
  .match('\\', value);

/**
 * Ring bond.
 */

rule('bond.ring')
  .match(':bond?', ':literal.digit', passthrough)
  .match(':bond?', '%', ':literal.digit', ':literal.digit', passthrough);

/**
 * Branch.
 */

rule('branch')
  .match('(', ':chain', ')', passthrough)
  .match('(', ':bond', ':chain', ')', passthrough)
  .match('(', ':punctuation.period', ':chain', ')', passthrough);

/**
 * Literal digit.
 */

rule('literal.digit')
  .match(/\d/, value);

/**
 * End of line.
 */

rule('terminator')
  .match(/$/, value);

/**
 * Open square bracket.
 */

rule('punctuation.bracket.square.begin')
  .match('[', value);

/**
 * Close square bracket.
 */

rule('punctuation.bracket.square.end')
  .match(']', value);

/**
 * Debug.
 */

function debug() {
  console.log(arguments);
}