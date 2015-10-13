

"use strict";

var search_data = [



,



{
label: "AddMultiSigAddress",
uri: "/en/developer-reference#addmultisigaddress",
category: "RPCs"
},
{
label: "AddNode",
uri: "/en/developer-reference#addnode",
category: "RPCs"
},
{
label: "BackupWallet",
uri: "/en/developer-reference#backupwallet",
category: "RPCs"
},
{
label: "CreateMultisig",
uri: "/en/developer-reference#createmultisig",
category: "RPCs"
},
{
label: "CreateRawTransaction",
uri: "/en/developer-reference#createrawtransaction",
category: "RPCs"
},
{
label: "DecodeRawTransaction",
uri: "/en/developer-reference#decoderawtransaction",
category: "RPCs"
},
{
label: "DecodeScript",
uri: "/en/developer-reference#decodescript",
category: "RPCs"
},
{
label: "DumpPrivKey",
uri: "/en/developer-reference#dumpprivkey",
category: "RPCs"
},
{
label: "DumpWallet",
uri: "/en/developer-reference#dumpwallet",
category: "RPCs"
},
{
label: "EncryptWallet",
uri: "/en/developer-reference#encryptwallet",
category: "RPCs"
},
{
label: "EstimateFee",
uri: "/en/developer-reference#estimatefee",
category: "RPCs"
},
{
label: "EstimatePriority",
uri: "/en/developer-reference#estimatepriority",
category: "RPCs"
},
{
label: "GetAccount",
uri: "/en/developer-reference#getaccount",
category: "RPCs"
},
{
label: "GetAccountAddress",
uri: "/en/developer-reference#getaccountaddress",
category: "RPCs"
},
{
label: "GetAddedNodeInfo",
uri: "/en/developer-reference#getaddednodeinfo",
category: "RPCs"
},
{
label: "GetAddressesByAccount",
uri: "/en/developer-reference#getaddressesbyaccount",
category: "RPCs"
},
{
label: "GetBalance",
uri: "/en/developer-reference#getbalance",
category: "RPCs"
},
{
label: "GetBestBlockHash",
uri: "/en/developer-reference#getbestblockhash",
category: "RPCs"
},
{
label: "GetBlock",
uri: "/en/developer-reference#getblock",
category: "RPCs"
},
{
label: "GetBlockChainInfo",
uri: "/en/developer-reference#getblockchaininfo",
category: "RPCs"
},
{
label: "GetBlockCount",
uri: "/en/developer-reference#getblockcount",
category: "RPCs"
},
{
label: "GetBlockHash",
uri: "/en/developer-reference#getblockhash",
category: "RPCs"
},
{
label: "GetBlockTemplate",
uri: "/en/developer-reference#getblocktemplate",
category: "RPCs"
},
{
label: "GetChainTips",
uri: "/en/developer-reference#getchaintips",
category: "RPCs"
},
{
label: "GetConnectionCount",
uri: "/en/developer-reference#getconnectioncount",
category: "RPCs"
},
{
label: "GetDifficulty",
uri: "/en/developer-reference#getdifficulty",
category: "RPCs"
},
{
label: "GetGenerate",
uri: "/en/developer-reference#getgenerate",
category: "RPCs"
},
{
label: "GetHashesPerSec",
uri: "/en/developer-reference#gethashespersec",
category: "RPCs"
},
{
label: "GetInfo",
uri: "/en/developer-reference#getinfo",
category: "RPCs"
},
{
label: "GetMempoolInfo",
uri: "/en/developer-reference#getmempoolinfo",
category: "RPCs"
},
{
label: "GetMiningInfo",
uri: "/en/developer-reference#getmininginfo",
category: "RPCs"
},
{
label: "GetNetTotals",
uri: "/en/developer-reference#getnettotals",
category: "RPCs"
},
{
label: "GetNetworkHashPS",
uri: "/en/developer-reference#getnetworkhashps",
category: "RPCs"
},
{
label: "GetNetworkInfo",
uri: "/en/developer-reference#getnetworkinfo",
category: "RPCs"
},
{
label: "GetNewAddress",
uri: "/en/developer-reference#getnewaddress",
category: "RPCs"
},
{
label: "GetPeerInfo",
uri: "/en/developer-reference#getpeerinfo",
category: "RPCs"
},
{
label: "GetRawChangeAddress",
uri: "/en/developer-reference#getrawchangeaddress",
category: "RPCs"
},
{
label: "GetRawMempool",
uri: "/en/developer-reference#getrawmempool",
category: "RPCs"
},
{
label: "GetRawTransaction",
uri: "/en/developer-reference#getrawtransaction",
category: "RPCs"
},
{
label: "GetReceivedByAccount",
uri: "/en/developer-reference#getreceivedbyaccount",
category: "RPCs"
},
{
label: "GetReceivedByAddress",
uri: "/en/developer-reference#getreceivedbyaddress",
category: "RPCs"
},
{
label: "GetTransaction",
uri: "/en/developer-reference#gettransaction",
category: "RPCs"
},
{
label: "GetTxout",
uri: "/en/developer-reference#gettxout",
category: "RPCs"
},
{
label: "GetTxOutProof",
uri: "/en/developer-reference#gettxoutproof",
category: "RPCs"
},
{
label: "GetTxoutSetInfo",
uri: "/en/developer-reference#gettxoutsetinfo",
category: "RPCs"
},
{
label: "GetUnconfirmedBalance",
uri: "/en/developer-reference#getunconfirmedbalance",
category: "RPCs"
},
{
label: "GetWalletInfo",
uri: "/en/developer-reference#getwalletinfo",
category: "RPCs"
},
{
label: "GetWork",
uri: "/en/developer-reference#getwork",
category: "RPCs"
},
{
label: "Help",
uri: "/en/developer-reference#help",
category: "RPCs"
},
{
label: "ImportAddress",
uri: "/en/developer-reference#importaddress",
category: "RPCs"
},
{
label: "ImportPrivkey",
uri: "/en/developer-reference#importprivkey",
category: "RPCs"
},
{
label: "ImportWallet",
uri: "/en/developer-reference#importwallet",
category: "RPCs"
},
{
label: "KeypoolRefill",
uri: "/en/developer-reference#keypoolrefill",
category: "RPCs"
},
{
label: "ListAccounts",
uri: "/en/developer-reference#listaccounts",
category: "RPCs"
},
{
label: "ListAddressGroupings",
uri: "/en/developer-reference#listaddressgroupings",
category: "RPCs"
},
{
label: "ListLockUnspent",
uri: "/en/developer-reference#listlockunspent",
category: "RPCs"
},
{
label: "ListReceivedByAccount",
uri: "/en/developer-reference#listreceivedbyaccount",
category: "RPCs"
},
{
label: "ListReceivedByAddress",
uri: "/en/developer-reference#listreceivedbyaddress",
category: "RPCs"
},
{
label: "ListSinceBlock",
uri: "/en/developer-reference#listsinceblock",
category: "RPCs"
},
{
label: "ListTransactions",
uri: "/en/developer-reference#listtransactions",
category: "RPCs"
},
{
label: "ListUnspent",
uri: "/en/developer-reference#listunspent",
category: "RPCs"
},
{
label: "LockUnspent",
uri: "/en/developer-reference#lockunspent",
category: "RPCs"
},
{
label: "Move",
uri: "/en/developer-reference#move",
category: "RPCs"
},
{
label: "Ping",
uri: "/en/developer-reference#ping-rpc",
category: "RPCs"
},
{
label: "SendFrom",
uri: "/en/developer-reference#sendfrom",
category: "RPCs"
},
{
label: "SendMany",
uri: "/en/developer-reference#sendmany",
category: "RPCs"
},
{
label: "SendRawTransaction",
uri: "/en/developer-reference#sendrawtransaction",
category: "RPCs"
},
{
label: "SendToAddress",
uri: "/en/developer-reference#sendtoaddress",
category: "RPCs"
},
{
label: "SetAccount",
uri: "/en/developer-reference#setaccount",
category: "RPCs"
},
{
label: "SetGenerate",
uri: "/en/developer-reference#setgenerate",
category: "RPCs"
},
{
label: "SetTxFee",
uri: "/en/developer-reference#settxfee",
category: "RPCs"
},
{
label: "SignMessage",
uri: "/en/developer-reference#signmessage",
category: "RPCs"
},
{
label: "SignRawTransaction",
uri: "/en/developer-reference#signrawtransaction",
category: "RPCs"
},
{
label: "Stop",
uri: "/en/developer-reference#stop",
category: "RPCs"
},
{
label: "SubmitBlock",
uri: "/en/developer-reference#submitblock",
category: "RPCs"
},
{
label: "ValidateAddress",
uri: "/en/developer-reference#validateaddress",
category: "RPCs"
},
{
label: "VerifyChain",
uri: "/en/developer-reference#verifychain",
category: "RPCs"
},
{
label: "VerifyMessage",
uri: "/en/developer-reference#verifymessage",
category: "RPCs"
},
{
label: "VerifyTxOutProof",
uri: "/en/developer-reference#verifytxoutproof",
category: "RPCs"
},
{
label: "WalletLock",
uri: "/en/developer-reference#walletlock",
category: "RPCs"
},
{
label: "WalletPassphrase",
uri: "/en/developer-reference#walletpassphrase",
category: "RPCs"
},
{
label: "WalletPassphraseChange",
uri: "/en/developer-reference#walletpassphrasechange",
category: "RPCs"
},



{
label: "OP_0 (OP_FALSE)",
uri: "https://en.bitcoin.it/wiki/Script#Constants",
category: "Op codes"
},
{
label: "OP_PUSHDATA1",
uri: "https://en.bitcoin.it/wiki/Script#Constants",
category: "Op codes"
},
{
label: "OP_PUSHDATA2",
uri: "https://en.bitcoin.it/wiki/Script#Constants",
category: "Op codes"
},
{
label: "OP_PUSHDATA4",
uri: "https://en.bitcoin.it/wiki/Script#Constants",
category: "Op codes"
},
{
label: "OP_1NEGATE",
uri: "https://en.bitcoin.it/wiki/Script#Constants",
category: "Op codes"
},
{
label: "OP_1 (OP_TRUE)",
uri: "https://en.bitcoin.it/wiki/Script#Constants",
category: "Op codes"
},
{
label: "OP_2",
uri: "https://en.bitcoin.it/wiki/Script#Constants",
category: "Op codes"
},
{
label: "OP_3",
uri: "https://en.bitcoin.it/wiki/Script#Constants",
category: "Op codes"
},
{
label: "OP_4",
uri: "https://en.bitcoin.it/wiki/Script#Constants",
category: "Op codes"
},
{
label: "OP_5",
uri: "https://en.bitcoin.it/wiki/Script#Constants",
category: "Op codes"
},
{
label: "OP_6",
uri: "https://en.bitcoin.it/wiki/Script#Constants",
category: "Op codes"
},
{
label: "OP_7",
uri: "https://en.bitcoin.it/wiki/Script#Constants",
category: "Op codes"
},
{
label: "OP_8",
uri: "https://en.bitcoin.it/wiki/Script#Constants",
category: "Op codes"
},
{
label: "OP_9",
uri: "https://en.bitcoin.it/wiki/Script#Constants",
category: "Op codes"
},
{
label: "OP_10",
uri: "https://en.bitcoin.it/wiki/Script#Constants",
category: "Op codes"
},
{
label: "OP_11",
uri: "https://en.bitcoin.it/wiki/Script#Constants",
category: "Op codes"
},
{
label: "OP_12",
uri: "https://en.bitcoin.it/wiki/Script#Constants",
category: "Op codes"
},
{
label: "OP_13",
uri: "https://en.bitcoin.it/wiki/Script#Constants",
category: "Op codes"
},
{
label: "OP_14",
uri: "https://en.bitcoin.it/wiki/Script#Constants",
category: "Op codes"
},
{
label: "OP_15",
uri: "https://en.bitcoin.it/wiki/Script#Constants",
category: "Op codes"
},
{
label: "OP_16",
uri: "https://en.bitcoin.it/wiki/Script#Constants",
category: "Op codes"
},
{
label: "OP_NOP",
uri: "https://en.bitcoin.it/wiki/Script#Flow_control",
category: "Op codes"
},
{
label: "OP_IF",
uri: "https://en.bitcoin.it/wiki/Script#Flow_control",
category: "Op codes"
},
{
label: "OP_NOTIF",
uri: "https://en.bitcoin.it/wiki/Script#Flow_control",
category: "Op codes"
},
{
label: "OP_ELSE",
uri: "https://en.bitcoin.it/wiki/Script#Flow_control",
category: "Op codes"
},
{
label: "OP_ENDIF",
uri: "https://en.bitcoin.it/wiki/Script#Flow_control",
category: "Op codes"
},
{
label: "OP_VERIFY",
uri: "https://en.bitcoin.it/wiki/Script#Flow_control",
category: "Op codes"
},
{
label: "OP_RETURN",
uri: "https://en.bitcoin.it/wiki/Script#Flow_control",
category: "Op codes"
},
{
label: "OP_TOALTSTACK",
uri: "https://en.bitcoin.it/wiki/Script#Stack",
category: "Op codes"
},
{
label: "OP_FROMALTSTACK",
uri: "https://en.bitcoin.it/wiki/Script#Stack",
category: "Op codes"
},
{
label: "OP_IFDUP",
uri: "https://en.bitcoin.it/wiki/Script#Stack",
category: "Op codes"
},
{
label: "OP_DEPTH",
uri: "https://en.bitcoin.it/wiki/Script#Stack",
category: "Op codes"
},
{
label: "OP_DROP",
uri: "https://en.bitcoin.it/wiki/Script#Stack",
category: "Op codes"
},
{
label: "OP_DUP",
uri: "https://en.bitcoin.it/wiki/Script#Stack",
category: "Op codes"
},
{
label: "OP_NIP",
uri: "https://en.bitcoin.it/wiki/Script#Stack",
category: "Op codes"
},
{
label: "OP_OVER",
uri: "https://en.bitcoin.it/wiki/Script#Stack",
category: "Op codes"
},
{
label: "OP_PICK",
uri: "https://en.bitcoin.it/wiki/Script#Stack",
category: "Op codes"
},
{
label: "OP_ROLL",
uri: "https://en.bitcoin.it/wiki/Script#Stack",
category: "Op codes"
},
{
label: "OP_ROT",
uri: "https://en.bitcoin.it/wiki/Script#Stack",
category: "Op codes"
},
{
label: "OP_SWAP",
uri: "https://en.bitcoin.it/wiki/Script#Stack",
category: "Op codes"
},
{
label: "OP_TUCK",
uri: "https://en.bitcoin.it/wiki/Script#Stack",
category: "Op codes"
},
{
label: "OP_2DROP",
uri: "https://en.bitcoin.it/wiki/Script#Stack",
category: "Op codes"
},
{
label: "OP_2DUP",
uri: "https://en.bitcoin.it/wiki/Script#Stack",
category: "Op codes"
},
{
label: "OP_3DUP",
uri: "https://en.bitcoin.it/wiki/Script#Stack",
category: "Op codes"
},
{
label: "OP_2OVER",
uri: "https://en.bitcoin.it/wiki/Script#Stack",
category: "Op codes"
},
{
label: "OP_2ROT",
uri: "https://en.bitcoin.it/wiki/Script#Stack",
category: "Op codes"
},
{
label: "OP_2SWAP",
uri: "https://en.bitcoin.it/wiki/Script#Stack",
category: "Op codes"
},
{
label: "OP_CAT (disabled)",
uri: "https://en.bitcoin.it/wiki/Script#Splice",
category: "Op codes"
},
{
label: "OP_SUBSTR (disabled)",
uri: "https://en.bitcoin.it/wiki/Script#Splice",
category: "Op codes"
},
{
label: "OP_LEFT (disabled)",
uri: "https://en.bitcoin.it/wiki/Script#Splice",
category: "Op codes"
},
{
label: "OP_RIGHT (disabled)",
uri: "https://en.bitcoin.it/wiki/Script#Splice",
category: "Op codes"
},
{
label: "OP_SIZE",
uri: "https://en.bitcoin.it/wiki/Script#Splice",
category: "Op codes"
},
{
label: "OP_INVERT (disabled)",
uri: "https://en.bitcoin.it/wiki/Script#Bitwise_logic",
category: "Op codes"
},
{
label: "OP_AND (disabled)",
uri: "https://en.bitcoin.it/wiki/Script#Bitwise_logic",
category: "Op codes"
},
{
label: "OP_OR (disabled)",
uri: "https://en.bitcoin.it/wiki/Script#Bitwise_logic",
category: "Op codes"
},
{
label: "OP_XOR (disabled)",
uri: "https://en.bitcoin.it/wiki/Script#Bitwise_logic",
category: "Op codes"
},
{
label: "OP_EQUAL",
uri: "https://en.bitcoin.it/wiki/Script#Bitwise_logic",
category: "Op codes"
},
{
label: "OP_EQUALVERIFY",
uri: "https://en.bitcoin.it/wiki/Script#Bitwise_logic",
category: "Op codes"
},
{
label: "OP_1ADD",
uri: "https://en.bitcoin.it/wiki/Script#Arithmetic",
category: "Op codes"
},
{
label: "OP_1SUB",
uri: "https://en.bitcoin.it/wiki/Script#Arithmetic",
category: "Op codes"
},
{
label: "OP_2MUL (disabled)",
uri: "https://en.bitcoin.it/wiki/Script#Arithmetic",
category: "Op codes"
},
{
label: "OP_2DIV (disabled)",
uri: "https://en.bitcoin.it/wiki/Script#Arithmetic",
category: "Op codes"
},
{
label: "OP_NEGATE",
uri: "https://en.bitcoin.it/wiki/Script#Arithmetic",
category: "Op codes"
},
{
label: "OP_ABS",
uri: "https://en.bitcoin.it/wiki/Script#Arithmetic",
category: "Op codes"
},
{
label: "OP_NOT",
uri: "https://en.bitcoin.it/wiki/Script#Arithmetic",
category: "Op codes"
},
{
label: "OP_0NOTEQUAL",
uri: "https://en.bitcoin.it/wiki/Script#Arithmetic",
category: "Op codes"
},
{
label: "OP_ADD",
uri: "https://en.bitcoin.it/wiki/Script#Arithmetic",
category: "Op codes"
},
{
label: "OP_SUB",
uri: "https://en.bitcoin.it/wiki/Script#Arithmetic",
category: "Op codes"
},
{
label: "OP_MUL (disabled)",
uri: "https://en.bitcoin.it/wiki/Script#Arithmetic",
category: "Op codes"
},
{
label: "OP_DIV (disabled)",
uri: "https://en.bitcoin.it/wiki/Script#Arithmetic",
category: "Op codes"
},
{
label: "OP_MOD (disabled)",
uri: "https://en.bitcoin.it/wiki/Script#Arithmetic",
category: "Op codes"
},
{
label: "OP_LSHIFT (disabled)",
uri: "https://en.bitcoin.it/wiki/Script#Arithmetic",
category: "Op codes"
},
{
label: "OP_RSHIFT (disabled)",
uri: "https://en.bitcoin.it/wiki/Script#Arithmetic",
category: "Op codes"
},
{
label: "OP_BOOLAND",
uri: "https://en.bitcoin.it/wiki/Script#Arithmetic",
category: "Op codes"
},
{
label: "OP_BOOLOR",
uri: "https://en.bitcoin.it/wiki/Script#Arithmetic",
category: "Op codes"
},
{
label: "OP_NUMEQUAL",
uri: "https://en.bitcoin.it/wiki/Script#Arithmetic",
category: "Op codes"
},
{
label: "OP_NUMEQUALVERIFY",
uri: "https://en.bitcoin.it/wiki/Script#Arithmetic",
category: "Op codes"
},
{
label: "OP_NUMNOTEQUAL",
uri: "https://en.bitcoin.it/wiki/Script#Arithmetic",
category: "Op codes"
},
{
label: "OP_LESSTHAN",
uri: "https://en.bitcoin.it/wiki/Script#Arithmetic",
category: "Op codes"
},
{
label: "OP_GREATERTHAN",
uri: "https://en.bitcoin.it/wiki/Script#Arithmetic",
category: "Op codes"
},
{
label: "OP_LESSTHANOREQUAL",
uri: "https://en.bitcoin.it/wiki/Script#Arithmetic",
category: "Op codes"
},
{
label: "OP_GREATERTHANOREQUAL",
uri: "https://en.bitcoin.it/wiki/Script#Arithmetic",
category: "Op codes"
},
{
label: "OP_MIN",
uri: "https://en.bitcoin.it/wiki/Script#Arithmetic",
category: "Op codes"
},
{
label: "OP_MAX",
uri: "https://en.bitcoin.it/wiki/Script#Arithmetic",
category: "Op codes"
},
{
label: "OP_WITHIN",
uri: "https://en.bitcoin.it/wiki/Script#Arithmetic",
category: "Op codes"
},
{
label: "OP_RIPEMD160",
uri: "https://en.bitcoin.it/wiki/Script#Crypto",
category: "Op codes"
},
{
label: "OP_SHA1",
uri: "https://en.bitcoin.it/wiki/Script#Crypto",
category: "Op codes"
},
{
label: "OP_SHA256",
uri: "https://en.bitcoin.it/wiki/Script#Crypto",
category: "Op codes"
},
{
label: "OP_HASH160",
uri: "https://en.bitcoin.it/wiki/Script#Crypto",
category: "Op codes"
},
{
label: "OP_HASH256",
uri: "https://en.bitcoin.it/wiki/Script#Crypto",
category: "Op codes"
},
{
label: "OP_CODESEPARATOR",
uri: "https://en.bitcoin.it/wiki/Script#Crypto",
category: "Op codes"
},
{
label: "OP_CHECKSIG",
uri: "https://en.bitcoin.it/wiki/Script#Crypto",
category: "Op codes"
},
{
label: "OP_CHECKSIGVERIFY",
uri: "https://en.bitcoin.it/wiki/Script#Crypto",
category: "Op codes"
},
{
label: "OP_CHECKMULTISIG",
uri: "https://en.bitcoin.it/wiki/Script#Crypto",
category: "Op codes"
},
{
label: "OP_CHECKMULTISIGVERIFY",
uri: "https://en.bitcoin.it/wiki/Script#Crypto",
category: "Op codes"
},
{
label: "OP_PUBKEYHASH (invalid)",
uri: "https://en.bitcoin.it/wiki/Script#Pseudo-words",
category: "Op codes"
},
{
label: "OP_PUBKEY (invalid)",
uri: "https://en.bitcoin.it/wiki/Script#Pseudo-words",
category: "Op codes"
},
{
label: "OP_INVALIDOPCODE (invalid)",
uri: "https://en.bitcoin.it/wiki/Script#Pseudo-words",
category: "Op codes"
},
{
label: "OP_RESERVED (reserved)",
uri: "https://en.bitcoin.it/wiki/Script#Reserved_words",
category: "Op codes"
},
{
label: "OP_VER (reserved)",
uri: "https://en.bitcoin.it/wiki/Script#Reserved_words",
category: "Op codes"
},
{
label: "OP_VERIF (reserved)",
uri: "https://en.bitcoin.it/wiki/Script#Reserved_words",
category: "Op codes"
},
{
label: "OP_VERNOTIF (reserved)",
uri: "https://en.bitcoin.it/wiki/Script#Reserved_words",
category: "Op codes"
},
{
label: "OP_RESERVED1 (reserved)",
uri: "https://en.bitcoin.it/wiki/Script#Reserved_words",
category: "Op codes"
},
{
label: "OP_RESERVED2 (reserved)",
uri: "https://en.bitcoin.it/wiki/Script#Reserved_words",
category: "Op codes"
},
{
label: "OP_NOP1 (reserved)",
uri: "https://en.bitcoin.it/wiki/Script#Reserved_words",
category: "Op codes"
},
{
label: "OP_NOP2 (reserved)",
uri: "https://en.bitcoin.it/wiki/Script#Reserved_words",
category: "Op codes"
},
{
label: "OP_NOP3 (reserved)",
uri: "https://en.bitcoin.it/wiki/Script#Reserved_words",
category: "Op codes"
},
{
label: "OP_NOP4 (reserved)",
uri: "https://en.bitcoin.it/wiki/Script#Reserved_words",
category: "Op codes"
},
{
label: "OP_NOP5 (reserved)",
uri: "https://en.bitcoin.it/wiki/Script#Reserved_words",
category: "Op codes"
},
{
label: "OP_NOP6 (reserved)",
uri: "https://en.bitcoin.it/wiki/Script#Reserved_words",
category: "Op codes"
},
{
label: "OP_NOP7 (reserved)",
uri: "https://en.bitcoin.it/wiki/Script#Reserved_words",
category: "Op codes"
},
{
label: "OP_NOP8 (reserved)",
uri: "https://en.bitcoin.it/wiki/Script#Reserved_words",
category: "Op codes"
},
{
label: "OP_NOP9 (reserved)",
uri: "https://en.bitcoin.it/wiki/Script#Reserved_words",
category: "Op codes"
},
{
label: "OP_NOP10 (reserved)",
uri: "https://en.bitcoin.it/wiki/Script#Reserved_words",
category: "Op codes"
},



{
label: "BIP1: BIP purpose and guidelines",
uri: "https://github.com/bitcoin/bips/blob/master/bip-0001.mediawiki",
category: "BIPs"
},
{
label: "BIP11: m-of-n multisig transactions",
uri: "https://github.com/bitcoin/bips/blob/master/bip-0011.mediawiki",
category: "BIPs"
},
{
label: "BIP13: P2SH address format",
uri: "https://github.com/bitcoin/bips/blob/master/bip-0013.mediawiki",
category: "BIPs"
},
{
label: "BIP14: protocol version and user agent",
uri: "https://github.com/bitcoin/bips/blob/master/bip-0014.mediawiki",
category: "BIPs"
},
{
label: "BIP16: pay to script hash (P2SH)",
uri: "https://github.com/bitcoin/bips/blob/master/bip-0016.mediawiki",
category: "BIPs"
},
{
label: "BIP21: URI scheme",
uri: "https://github.com/bitcoin/bips/blob/master/bip-0021.mediawiki",
category: "BIPs"
},
{
label: "BIP22: GetBlockTemplate fundamentals",
uri: "https://github.com/bitcoin/bips/blob/master/bip-0022.mediawiki",
category: "BIPs"
},
{
label: "BIP23: GetBlockTemplate pooled mining",
uri: "https://github.com/bitcoin/bips/blob/master/bip-0023.mediawiki",
category: "BIPs"
},
{
label: "BIP30: dealing with duplicate transactions",
uri: "https://github.com/bitcoin/bips/blob/master/bip-0030.mediawiki",
category: "BIPs"
},
{
label: "BIP31: P2P pong message",
uri: "https://github.com/bitcoin/bips/blob/master/bip-0031.mediawiki",
category: "BIPs"
},
{
label: "BIP32: HD wallets",
uri: "https://github.com/bitcoin/bips/blob/master/bip-0032.mediawiki",
category: "BIPs"
},
{
label: "BIP34: block height in coinbase",
uri: "https://github.com/bitcoin/bips/blob/master/bip-0034.mediawiki",
category: "BIPs"
},
{
label: "BIP35: P2P mempool message",
uri: "https://github.com/bitcoin/bips/blob/master/bip-0035.mediawiki",
category: "BIPs"
},
{
label: "BIP37: bloom filtering",
uri: "https://github.com/bitcoin/bips/blob/master/bip-0037.mediawiki",
category: "BIPs"
},
{
label: "BIP38: passphrase-protected private key",
uri: "https://github.com/bitcoin/bips/blob/master/bip-0038.mediawiki",
category: "BIPs"
},
{
label: "BIP39: mnemonic code for HD wallets",
uri: "https://github.com/bitcoin/bips/blob/master/bip-0039.mediawiki",
category: "BIPs"
},
{
label: "BIP42: finite monetary supply",
uri: "https://github.com/bitcoin/bips/blob/master/bip-0042.mediawiki",
category: "BIPs"
},
{
label: "BIP44: HD wallet account hierarchy",
uri: "https://github.com/bitcoin/bips/blob/master/bip-0044.mediawiki",
category: "BIPs"
},
{
label: "BIP50: March 2013 fork post-mortem",
uri: "https://github.com/bitcoin/bips/blob/master/bip-0050.mediawiki",
category: "BIPs"
},
{
label: "BIP60: fixed-length version message",
uri: "https://github.com/bitcoin/bips/blob/master/bip-0060.mediawiki",
category: "BIPs"
},
{
label: "BIP61: P2P reject message",
uri: "https://github.com/bitcoin/bips/blob/master/bip-0061.mediawiki",
category: "BIPs"
},
{
label: "BIP62: dealing with malleability",
uri: "https://github.com/bitcoin/bips/blob/master/bip-0062.mediawiki",
category: "BIPs"
},
{
label: "BIP64: P2P geutxos message",
uri: "https://github.com/bitcoin/bips/blob/master/bip-0064.mediawiki",
category: "BIPs"
},
{
label: "BIP65: OP_CHECKLOCKTIMEVERIFY",
uri: "https://github.com/bitcoin/bips/blob/master/bip-0065.mediawiki",
category: "BIPs"
},
{
label: "BIP66: strict DER signatures",
uri: "https://github.com/bitcoin/bips/blob/master/bip-0066.mediawiki",
category: "BIPs"
},
{
label: "BIP70: payment protocol",
uri: "https://github.com/bitcoin/bips/blob/master/bip-0070.mediawiki",
category: "BIPs"
},
{
label: "BIP71: payment protocol MIME types",
uri: "https://github.com/bitcoin/bips/blob/master/bip-0071.mediawiki",
category: "BIPs"
},
{
label: "BIP72: payment protocol URIs",
uri: "https://github.com/bitcoin/bips/blob/master/bip-0072.mediawiki",
category: "BIPs"
},
{
label: "BIP73: accept header with payment protocol",
uri: "https://github.com/bitcoin/bips/blob/master/bip-0073.mediawiki",
category: "BIPs"
},



{
label: "addr",
uri: "/en/developer-reference#addr",
category: "P2P Messages"
},
{
label: "alert",
uri: "/en/developer-reference#alert",
category: "P2P Messages"
},
{
label: "block",
uri: "/en/developer-reference#block",
category: "P2P Messages"
},
{
label: "filteradd",
uri: "/en/developer-reference#filteradd",
category: "P2P Messages"
},
{
label: "filterclear",
uri: "/en/developer-reference#filterclear",
category: "P2P Messages"
},
{
label: "filterload",
uri: "/en/developer-reference#filterload",
category: "P2P Messages"
},
{
label: "getaddr",
uri: "/en/developer-reference#getaddr",
category: "P2P Messages"
},
{
label: "getblocks",
uri: "/en/developer-reference#getblocks",
category: "P2P Messages"
},
{
label: "getdata",
uri: "/en/developer-reference#getdata",
category: "P2P Messages"
},
{
label: "getheaders",
uri: "/en/developer-reference#getheaders",
category: "P2P Messages"
},
{
label: "headers",
uri: "/en/developer-reference#headers",
category: "P2P Messages"
},
{
label: "inv",
uri: "/en/developer-reference#inv",
category: "P2P Messages"
},
{
label: "mempool",
uri: "/en/developer-reference#mempool",
category: "P2P Messages"
},
{
label: "merkleblock",
uri: "/en/developer-reference#merkleblock",
category: "P2P Messages"
},
{
label: "notfound",
uri: "/en/developer-reference#notfound",
category: "P2P Messages"
},
{
label: "ping",
uri: "/en/developer-reference#ping",
category: "P2P Messages"
},
{
label: "pong",
uri: "/en/developer-reference#pong",
category: "P2P Messages"
},
{
label: "reject",
uri: "/en/developer-reference#reject",
category: "P2P Messages"
},
{
label: "tx",
uri: "/en/developer-reference#tx",
category: "P2P Messages"
},
{
label: "verack",
uri: "/en/developer-reference#verack",
category: "P2P Messages"
},
{
label: "version",
uri: "/en/developer-reference#version",
category: "P2P Messages"
}
];



// code adapted from http://jqueryui.com/autocomplete/#categories
// MIT license: https://jquery.org/license/

$.widget("custom.catcomplete", $.ui.autocomplete, {
  _create: function() {
    this._super();
    this.widget().menu("option", "items", "> :not(.ui-autocomplete-category)");
  },
  _renderMenu: function(ul, items) {
    var that = this,
      currentCategory = "";
    $.each(items, function(index, item) {
      var li;
      if (item.category !== currentCategory) {
        ul.append("<li class='ui-autocomplete-category'>" + item.category + "</li>");
        currentCategory = item.category;
      }
      li = that._renderItemData(ul, item);
      if (item.category) {
        li.attr("aria-label", item.category + " : " + item.label);
      }
    });
  }
});
$(function() {
  $("#glossary_term").catcomplete({
    source: search_data,
    delay: 0,
    minLength: 2,
    autoFocus: true,
    select: function(event, ui) {
      location.href = ui.item.uri;
    }
  });
});

