const { Chess } = require('chess.js');
let allOk = true;

const test = (id, fen, seq, mate=false) => {
  const c = new Chess(fen);
  for (const m of seq) {
    try { c.move(m); }
    catch(e) { console.log('FAIL', id, m, e.message); allOk=false; return; }
  }
  if (mate && !c.isCheckmate()) { console.log('FAIL NOT_MATE', id); allOk=false; return; }
  console.log('OK', id);
};

// ===== MATES (8) =====
test(1, '6k1/5ppp/8/3R4/8/8/5PPP/6K1 w - - 0 1', ['Rd8#'], true);
test(2, '7k/5ppp/8/8/8/8/5PPP/R6K w - - 0 1', ['Ra8#'], true);
test(3, '3r2k1/p4ppp/8/8/8/8/P4PPP/3Q2K1 w - - 0 1', ['Qd8#'], true);
test(4, '4r1k1/pp3ppp/8/4Q3/8/8/PP3PPP/6K1 w - - 0 1', ['Qxe8#'], true);
test(5, 'r4r1k/pp2N1pp/8/7Q/8/R7/P4PPP/6K1 w - - 0 1', ['Qxh7+','Kxh7','Rh3#'], true);
test(6, 'r4r1k/p5pp/7N/3Q4/8/8/P5PP/6K1 w - - 0 1', ['Qg8+','Rxg8','Nf7#'], true);
// p7 new: simple queen+rook mate
test(7, '5rk1/p5pp/8/8/8/8/P4QPP/5RK1 w - - 0 1', ['Qh4+','Kg8','Qh7+','Kh8','Rxf8#'], true);
test(8, '4kb1r/p2n1ppp/4q3/4p1B1/8/1Q6/PPP2PPP/2KR4 w k - 0 1', ['Qb8+','Nxb8','Rd8#'], true);

// ===== FORKS (8) =====
test(9,  'q1k5/3N4/8/8/8/8/8/4K3 w - - 0 1', ['Nb6+','Kd8','Nxa8']);
test(10, '1r3k2/8/5N2/8/8/8/8/4K3 w - - 0 1', ['Nd7+','Kg8','Nxb8']);
test(11, 'r3k2r/8/8/1N6/8/8/8/4K3 w - - 0 1', ['Nc7+','Kd8','Nxa8']);
test(12, '8/2q1k3/8/8/8/4N3/8/4K3 w - - 0 1', ['Nd5+','Ke6','Nxc7']);
test(13, '2r3r1/4k3/8/8/8/8/8/3QK3 w - - 0 1', ['Qd8+','Ke6','Qxc8']);
test(14, 'r7/8/8/1N1k4/8/8/8/4K3 w - - 0 1', ['Nc7+','Ke5','Nxa8']);
test(15, '2qk4/8/8/8/8/7Q/8/4K3 w - - 0 1', ['Qxc8+','Ke7','Qe8#'], true);
test(16, '8/8/8/4r3/8/8/1N1k4/5K2 w - - 0 1', ['Nc4+','Kc3','Nxe5']);

// ===== PINS (8) =====
test(17, '6k1/8/8/8/2nR4/8/B7/4K3 w - - 0 1', ['Rxc4']);
test(18, '4k3/8/8/2n5/8/B1R5/8/4K3 w - - 0 1', ['Rxc5']);
test(19, '7k/8/5n2/8/8/2B5/6R1/4K3 w - - 0 1', ['Bxf6+']);
test(20, '7k/7r/8/6NR/8/8/8/4K3 w - - 0 1', ['Nxh7']);
test(21, '6k1/8/3n4/8/3R4/1B6/8/4K3 w - - 0 1', ['Rxd6']);
test(22, '4k3/8/3r4/8/3R4/8/3B4/4K3 w - - 0 1', ['Rxd6']);
test(23, '7k/8/3n4/8/1B6/3R4/8/4K3 w - - 0 1', ['Rxd6']);
test(24, '4k3/4r3/8/8/4R3/2B5/8/4K3 w - - 0 1', ['Rxe7']);

// ===== DISCOVERED ATTACKS (8) =====
// White piece moves off line, discovering attack from another white piece
test(25, '4R3/8/8/8/4B3/4k3/8/4K3 w - - 0 1', ['Bc6+']);  // bishop moves, Re8 discovers check on e-file
test(26, '8/8/8/k7/1B6/8/8/R3K3 w Q - 0 1', ['Bc3+','Ka4','Rxa2+']); // bishop moves reveals rook
test(27, 'r7/8/1k6/8/8/5B2/8/R3K3 w Q - 0 1', ['Bc6+','Kb5','Rxa8']); // bishop check discovers rook on a8
test(28, '8/8/8/8/k3B3/8/8/R3K3 w Q - 0 1', ['Bc6+','Ka5','Rxa1+']); // wait
test(29, '8/8/2k5/8/8/3N4/5B2/4K3 w - - 0 1', ['Nb4+','Kb5','Bd4+']); // knight check reveals bishop
test(30, '8/8/1k6/5B2/8/8/8/R3K3 w Q - 0 1', ['Bc8+','Kb5','Ra5+']); // wait
test(31, '8/8/3k4/8/3N4/8/5B2/4K3 w - - 0 1', ['Ne6+','Ke5','Bc8+']); // knight check reveals bishop
test(32, '8/k7/8/8/4N3/8/2B5/4K3 w - - 0 1', ['Nb6+','Ka6','Bc4+']); // knight check reveals bishop

process.exit(allOk ? 0 : 1);
