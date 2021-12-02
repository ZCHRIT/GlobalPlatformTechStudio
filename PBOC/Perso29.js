try
{
	//Get Security Domain
	gpsd = auth();
	
	//Open secure channel
	gpsd.openSecureChannel(SecureChannel.SECURITY_LEVEL_CMAC_ENCRYPTION,0x00);
	Print("Open secure channel ok");

	//Delete Same App AID
	rsp = gpsd.deleteAID(new ByteString("A000000333010101",HEX),[0x9000,0x6A88]);
	Print("Delete Same App AID rsp : " + rsp.toString(HEX));

	//Install For Install
	elfAid = new ByteString("5A43485249544341524450424F4333",HEX);
	elmAid = new ByteString("5A43485249544341524450424F4333",HEX);
	appAid = new ByteString("A000000333010101",HEX);
	privileges = new ByteString("000000",HEX);
	installParam = new ByteString("C900",HEX);
	installToken = new ByteString("",HEX);
	isMakeSelectable = true;

	//Install for install
	rsp = gpsd.installForInstall(elfAid,elmAid,appAid,privileges,installParam,installToken,isMakeSelectable,[0x9000]);
	Print("Install for install rsp : " + rsp.toString(HEX));

	//Card reset
	atr = gpsd.card.reset(Card.RESET_COLD);
	Print("reset card");

	//PBOC APP
	var app = new GPApplication();
	app.aid = new ByteString('A000000333010101', HEX);
	app.securityDomain = gpsd;
	
	//Select APP
	rsp = app.select(false,false,[0x9000]);
	Print("select app : " + rsp.toString(HEX));
	
	//Open secure channel
	gpsd.openSecureChannel(SecureChannel.SECURITY_LEVEL_CMAC_ENCRYPTION,0x00);
	Print("Open secure channel ok");
	
	//StoreData DGI 0102
	app.storeData(new ByteString("01012E702C57116228000100001117D301220101234567899F1F1630313032303330343035303630373038303930413042",HEX),true,[0x9000]);

	//StoreData DGI 0102
	app.storeData(new ByteString("01021470125F200F46554C4C2046554E4354494F4E414C",HEX),true,[0x9000]);

	//StoreData DGI 0201
	app.storeData(new ByteString("02011D701B5A0862280001000011175F24033012315F25031007019F08020030",HEX),true,[0x9000]);

	//StoreData DGI 0202
	app.storeData(new ByteString("020286708183938180229103A5E3120F2D2862091176AA2BD4E24D69E7EEF7B9195C91EA0088AECFF47EDFA0BEEF7C391DF3B05F717DCC06FFC8EEFF90BA14212B8A52AD48B33277B2E230D40B3E76DC59778926F1D8739E106CD741DE06A7423DFBA25E02F12E543D13D1B471806526024981B7D26B4BF6E5558604CCC289F59E8A802F45FB3D9E67",HEX),true,[0x9000]);

	//StoreData DGI 0203
	app.storeData(new ByteString("0203877081849F468180229103A5E3120F2D2862091176AA2BD4E24D69E7EEF7B9195C91EA0088AECFF47EDFA0BEEF7C391DF3B05F717DCC06FFC8EEFF90BA14212B8A52AD48B33277B2E230D40B3E76DC59778926F1D8739E106CD741DE06A7423DFBA25E02F12E543D13D1B471806526024981B7D26B4BF6E5558604CCC289F59E8A802F45FB3D9E67",HEX),true,[0x9000]);

	//StoreData DGI 0204
	app.storeData(new ByteString("02043370315F3401019F47030100019F4824DA7D9ED0CB4FB9A1182967B17314701AC51969D44B85798C8ECE039CD0C11714E9CC19EB",HEX),true,[0x9000]);

	//StoreData DGI 0205
	app.storeData(new ByteString("02051D701B5A0862280001000011175F24033012315F25031007019F08020030",HEX),true,[0x9000]);

	//StoreData DGI 0206
	app.storeData(new ByteString("020686708183938180229103A5E3120F2D2862091176AA2BD4E24D69E7EEF7B9195C91EA0088AECFF47EDFA0BEEF7C391DF3B05F717DCC06FFC8EEFF90BA14212B8A52AD48B33277B2E230D40B3E76DC59778926F1D8739E106CD741DE06A7423DFBA25E02F12E543D13D1B471806526024981B7D26B4BF6E5558604CCC289F59E8A802F45FB3D9E67",HEX),true,[0x9000]);

	//StoreData DGI 0207
	app.storeData(new ByteString("0207877081849F468180229103A5E3120F2D2862091176AA2BD4E24D69E7EEF7B9195C91EA0088AECFF47EDFA0BEEF7C391DF3B05F717DCC06FFC8EEFF90BA14212B8A52AD48B33277B2E230D40B3E76DC59778926F1D8739E106CD741DE06A7423DFBA25E02F12E543D13D1B471806526024981B7D26B4BF6E5558604CCC289F59E8A802F45FB3D9E67",HEX),true,[0x9000]);

	//StoreData DGI 0208
	app.storeData(new ByteString("02083C703A5F3401019F47030100019F4824DA7D9ED0CB4FB9A1182967B17314701AC51969D44B85798C8ECE039CD0C11714E9CC19EB9F7406454343313131",HEX),true,[0x9000]);

	//StoreData DGI 0301
	app.storeData(new ByteString("03018A7081878C189F02069F03069F1A0295055F2A029A039F21039C019F37048D1A8A029F02069F03069F1A0295055F2A029A039F21039C019F37045F300202019F420201569F49039F37049F0702FFC05F280201569F0D057C70B808009F0E057C70B808009F0F0500000000009F6310112233445566778800000000000000008E0A00000000000000000100",HEX),true,[0x9000]);

	//StoreData DGI 0302
	app.storeData(new ByteString("030286708183908180229103A5E3120F2D2862091176AA2BD4E24D69E7EEF7B9195C91EA0088AECFF47EDFA0BEEF7C391DF3B05F717DCC06FFC8EEFF90BA14212B8A52AD48B33277B2E230D40B3E76DC59778926F1D8739E106CD741DE06A7423DFBA25E02F12E543D13D1B471806526024981B7D26B4BF6E5558604CCC289F59E8A802F45FB3D9E67",HEX),true,[0x9000]);

	//StoreData DGI 0303
	app.storeData(new ByteString("03032F702D8F01809F32010392248B643D1EAF2EA784AC205303C90E745EA2EFA5CBF02CC47D47833BB7B27ECC6962385A4B",HEX),true,[0x9000]);

	//StoreData DGI 0401
	app.storeData(new ByteString("04011470129F6908010000000030009F1401039F230107",HEX),true,[0x9000]);

	//StoreData DGI 8000 Symmetric key
	app.storeData(new ByteString("800030112233440066778811223344550077888B4F854F0831FBF2635A212E4DDDB92A11220044556677881122330055667788",HEX),true,[0x9000]);

	//StoreData DGI 8010 Offline PIN
	app.storeData(new ByteString("801008241234FFFFFFFFFF",HEX),true,[0x9000]);

	//StoreData DGI 9000 Symmetric key checksum value
	app.storeData(new ByteString("90000997DCB0CE4E2CB37DF3",HEX),true,[0x9000]);
	
	//StoreData DGI 9010 Pin data
	app.storeData(new ByteString("9010020303",HEX),true,[0x9000]);
	
	//StoreData DGI 8201 Private - Qinv
	app.storeData(new ByteString("8201400EB41A42801F08D5C16EE593800E16C42894639D1D16FCD366FE4D80A4154B15FB25AC5C24D7607848B55F022230FE4FAD4913AD526CB928A762F183625D775B0000000000000000",HEX),true,[0x9000]);
	
	//StoreData DGI 8202 Private - Dq
	app.storeData(new ByteString("8202405A2479BF4799F5A9EF236387F9341203C5091A5B08245F33560DF43EEB6592F73A8F0FC5026B8EBFAA60D1BD76F43F02B2A33ABB40357C0FB9E92568AE02CCB90000000000000000",HEX),true,[0x9000]);
	
	//StoreData DGI 8203 Private - Dp
	app.storeData(new ByteString("8203403D25ADCD0731EDEBBF3F5B4EFDC13C4DE5D00AFE3CFAA2D9F00B8EED81E36AF8CCC566E050BCA1DEF2CADEAC38F492589A6FD5E7D9D32F3D1758FE0E1E2335410000000000000000",HEX),true,[0x9000]);
	
	//StoreData DGI 8204 Private - Q
	app.storeData(new ByteString("820440C1960C87E0333FCBB1C2BBEB787019D6080B33C8F5039C2BD55CC1D247398AA5DBD47FA4E1FF85F425D214B4B32A341E72C1F9FF6765D1155963BEC02E8958D90000000000000000",HEX),true,[0x9000]);
	
	//StoreData DGI 8205 Private - P
	app.storeData(new ByteString("820540D0BAD286ED4E1CBE6CED5391A9696ED58F317E4A52D0E37C755C01225F676AB712A15D1B953BD67FB8DFB610655965352583B46B260E481661DF74FE85C20AC10000000000000000",HEX),true,[0x9000]);
	
	//StoreData DGI 0D01 Internal risk management data in card(0D01)
	app.storeData(new ByteString("0D016C9F5301029F7201009F54060000000100009F4F199A039F21039F02069F03069F1A025F2A029F4E149C019F3602DF4F109A039F21039F1A029F4E149C019F36029F5801039F5901079F77060000000100009F78060000000010009F79060000000020009F6D06000000001500",HEX),true,[0x9000]);
	
	//StoreData DGI 0E01 Internal risk management data in card(0E01)
	app.storeData(new ByteString("0E01589F510201569F520282C89F570201565F3401019F7602000057116228000100001117D301220101234567899F560180DF71020344DF7606000000005000DF7706000000200000DF7806000000050000DF7906000000100000",HEX),true,[0x9000]);
	
	//StoreData DGI 9102 Select the application response data
	app.storeData(new ByteString("910252A550500B50424F43204372656469748701015F2D087A68656E667264659F1101019F120F4341524420494D41474520303032399F380F9F1A029F7A019F02065F2A029F4E14BF0C0A9F4D020B0ADF4D020C0A",HEX),true,[0x9000]);
	
	//StoreData DGI 9103 Contactless Select the application response data
	app.storeData(new ByteString("910364A562500B50424F43204372656469748701015F2D087A68656E667264659F1101019F120F4341524420494D41474520303032399F38219F66049F02069F03069F1A0295055F2A029A039C019F37049F33039F4E149F7A01BF0C0A9F4D020B0ADF4D020C0A",HEX),true,[0x9000]);
	
	//StoreData DGI 9104 GPO response data (DC)
	app.storeData(new ByteString("91041682027C00941008010200100104011801030020010100",HEX),true,[0x9000]);
	
	//StoreData DGI 9203 GPO response data (EC)
	app.storeData(new ByteString("92031682027800941008010200100508011801030020010100",HEX),true,[0x9000]);
	
	//StoreData DGI 9200 GPO response data (EC)
	app.storeData(new ByteString("92000D9F100A07010103000000010A01",HEX),false,[0x9000]);

	alert("Personalization Successfully");
}
catch (e)
{
	Print("Exception : " + e.className + "," + e.error + "," + e.reason + "," + e.message);
}

//Get Security Domain
function auth() {
	//new card
	card = new Card;

	//GP SCP02
	var scp02 = new GPScp02();

	//Set KMC
	var keyKMC = new Key();
	keyKMC.setComponent(Key.DES,new ByteString("404142434445464748494A4B4C4D4E4F",HEX));
	scp02.setBaseKey(keyKMC,GPScp02.DIVERSIFY_MODE_NON);

	//Security Domain
	var gpsd = new GPSecurityDomain;

	//Set Secure Channel
	gpsd.secureChannel = scp02;

	//Card reset
	atr = gpsd.card.reset(Card.RESET_COLD);
	Print("Reset Card");

	//Select
	gpsd.select([0x9000]);
	Print("Select CM ok");
	
	return gpsd;
}