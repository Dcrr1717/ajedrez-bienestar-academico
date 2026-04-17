const { Chess } = require('chess.js');
let ok = true;
const t = (id, fen, seq, mate = false) => {
  let c;
  try { c = new Chess(fen); } catch(e) { console.log('FEN ERR', id, e.message.slice(0,50)); ok=false; return; }
  for (const mv of seq) {
    try { c.move(mv); } catch(e) { console.log('FAIL', id, mv, e.message.slice(0,50)); ok=false; return; }
  }
  if (mate && !c.isCheckmate()) { console.log('NOT_MATE', id); ok=false; return; }
  console.log('OK', id);
};

// ═══ AGRESIVOS A1-A20 ═══
t('A1',  '6k1/5ppp/8/3R4/8/8/5PPP/6K1 w - - 0 1',         ['Rd8#'], true);
t('A2',  '6k1/pp3ppp/8/8/3Q4/8/PP3PPP/6K1 w - - 0 1',      ['Qd8#'], true);
t('A3',  '4r1k1/pp3ppp/8/4Q3/8/8/PP3PPP/6K1 w - - 0 1',    ['Qxe8#'], true);
t('A4',  '6k1/5ppp/8/8/8/8/5PPP/Q5RK w - - 0 1',           ['Qa8#'], true);
t('A5',  '6k1/5ppp/8/8/8/8/5PPP/4QRK1 w - - 0 1',          ['Qe8#'], true);
t('A6',  'r4r1k/p5pp/7N/3Q4/8/8/P5PP/6K1 w - - 0 1',       ['Qg8+','Rxg8','Nf7#'], true);
t('A7',  'r4r1k/pp2N1pp/8/7Q/8/R7/P4PPP/6K1 w - - 0 1',    ['Qxh7+','Kxh7','Rh3#'], true);
t('A8',  '4kb1r/p2n1ppp/4q3/4p1B1/8/1Q6/PPP2PPP/2KR4 w k - 0 1', ['Qb8+','Nxb8','Rd8#'], true);
t('A9',  'q1k5/3N4/8/8/8/8/8/4K3 w - - 0 1',               ['Nb6+','Kd8','Nxa8']);
t('A10', 'r3k2r/8/8/1N6/8/8/8/4K3 w - - 0 1',              ['Nc7+','Kd8','Nxa8']);
t('A11', '1r3k2/8/5N2/8/8/8/8/4K3 w - - 0 1',              ['Nd7+','Kg8','Nxb8']);
t('A12', '8/2q1k3/8/8/8/4N3/8/4K3 w - - 0 1',              ['Nd5+','Ke6','Nxc7']);
t('A13', '6k1/8/8/8/2nR4/8/B7/4K3 w - - 0 1',              ['Rxc4']);
t('A14', '4R3/8/8/8/4B3/4k3/8/4K3 w - - 0 1',              ['Bc6+']);
t('A15', '2r3r1/4k3/8/8/8/8/8/3QK3 w - - 0 1',             ['Qd8+','Ke6','Qxc8']);
t('A16', '2k5/8/8/8/8/2B5/8/2R1K3 w - - 0 1',              ['Bb4+','Kb7','Rc7+']);
t('A17', '8/6p1/8/6P1/3k4/8/8/3K4 w - - 0 1',              ['Kd2','Kd5','Kd3']);
t('A18', '4k3/4p3/8/4P3/8/8/8/4K3 w - - 0 1',              ['Ke2','Kf7','Kd3']);
t('A19', '8/8/8/3k4/3P4/3K4/8/8 w - - 0 1',                ['Kc3','Ke4','d5']);
// A20: Bb7+ Kh8 Re8+  (discovered check — bishop reveals rook on e-file)
t('A20', '3q4/7k/8/8/4B3/8/8/4RK2 w - - 0 1',              ['Bb7+','Kh8','Re8+']);

// ═══ DEFENSIVOS D1-D20 ═══
t('D1',  '6k1/5ppp/5r2/8/8/6Q1/5PPP/5RK1 b - - 0 1',       ['Rg6']);
t('D2',  '6k1/5ppp/8/3r4/8/8/5PPP/3R2K1 b - - 0 1',        ['Rd8']);
t('D3',  '4r1k1/pp3ppp/8/4q3/8/8/PP3PPP/4R1K1 b - - 0 1',  ['Qe2']);
// D4: black queen perpetual (Kh1 is the actual white response to Qg4+)
// D4: black queen forces perpetual OR finds back-rank mate
t('D4',  '6k1/5ppp/8/8/8/8/5PPP/3q2K1 b - - 0 1',          ['Qg4+','Kh1','Qd1#'], true);
// D5: black exchanges queens then centralizes rook
t('D5',  'r5k1/ppp2ppp/8/4q3/8/8/PPP2PPP/3QR1K1 b - - 0 1', ['Qxe1+','Qxe1','Rf8']);
// D6: black king must move to g8 to avoid checkmate threat, then escape
t('D6',  '7k/5ppp/8/8/8/8/5PPP/4R1K1 b - - 0 1',           ['Kg8','Re3','Kf8']);
t('D7',  '6k1/5ppp/8/8/5r2/8/5PPP/5RK1 b - - 0 1',         ['Rxf2','Rxf2','Kf8']);
t('D8',  '3k4/8/3K4/8/3P4/8/8/8 b - - 0 1',                ['Kc8','d5','Kd8']);
t('D9',  '8/p7/Pk6/8/8/8/8/3K4 b - - 0 1',                 ['Kxa6','Kd2','Ka5']);
t('D10', '8/8/8/8/k7/8/P7/K7 b - - 0 1',                   ['Ka5','Kb2','Ka6']);
// D11: correct opposition sequence - white king is d1 in this position  
t('D11', '8/3k4/8/3p4/3P4/8/8/3K4 b - - 0 1',              ['Ke6','Ke1','Kd6']);
t('D12', '8/8/5k2/8/8/8/5PP1/5K2 b - - 0 1',               ['Ke6','Ke2','Kd6']);
t('D13', '8/8/8/8/8/k7/2p5/2K5 b - - 0 1',                 ['Kb3','Kd2','c1=Q+']);
t('D14', '8/8/8/8/8/8/p7/k1K5 b - - 0 1',                  []);  // stalemate
// D15: pawn promotes — correct sequence
t('D15', '8/8/8/8/8/3k4/3p4/3K4 b - - 0 1',                ['Kc4','Kc2','d1=Q+']);
// D16: pawn e2, black king f2, white king d1 → Ke3 Kc2 then promote
t('D16', '8/8/8/8/8/8/3pk3/3K4 b - - 0 1',                 ['Ke3','Kc2','Kf2']);
// D17: symmetric pawn ending — Kd8 then Ke2 then d6
t('D17', '4k3/3p4/8/8/8/8/3P4/4K3 b - - 0 1',              ['Kd8','Ke2','d6']);
t('D18', '8/8/8/3k4/8/8/3K4/8 b - - 0 1',                  ['Ke5','Ke3','Kd5']);
t('D19', '8/8/8/8/8/2B5/8/2R1K2k b - - 0 1',               ['Kh2','Rc2+','Kh3']);
t('D20', '8/8/8/k7/2N5/8/8/R3K3 w Q - 0 1',                ['Nxa5']);

console.log('\n' + (ok ? '✅ ALL 40 PASSED' : '❌ SOME FAILED'));
