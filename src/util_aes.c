#include "util_aes.h"

bool bol_global_aes_key_reset = true;

char *aes_encrypt(char *str_plaintext, int *ptr_int_plaintext_length) {
	DEFINE_VAR_ALL(str_output);
	char *str_return = NULL;
	
	//initialize
	set_aes_key_iv();
	AES_KEY AESkey;
	//int int_new_length = *ptr_int_plaintext_length;
	*ptr_int_plaintext_length = ((*ptr_int_plaintext_length + AES_BLOCK_SIZE) / AES_BLOCK_SIZE) * AES_BLOCK_SIZE;
	int int_aes_length = *ptr_int_plaintext_length;
	//*ptr_int_plaintext_length = (*ptr_int_plaintext_length) - ((*ptr_int_plaintext_length) % 16) + 16;
	ERROR_SALLOC(str_output, int_aes_length + 1);
    memset(str_output, 0, int_aes_length);
	
	AES_set_encrypt_key((const unsigned char *) str_global_aes_key, 256, &AESkey);
	
	AES_cbc_encrypt((const unsigned char *)str_plaintext, (unsigned char *)str_output,
		int_aes_length, &AESkey, (unsigned char *)str_global_aes_iv, AES_ENCRYPT);
	/*
	AES_cbc_encrypt((const unsigned char *)str_plaintext, (unsigned char *)str_output,
		int_new_length, &AESkey, (unsigned char *)str_global_aes_iv, AES_ENCRYPT);
	*/
	
	//int int_original_length = int_new_length;
	//int_new_length = (int_new_length & 0xFFFFFFF0) + ((int_new_length & 0x0F) ? 16 : 0);
	//*(str_output + int_new_length) = (int_new_length - int_original_length);
	
	//printf("str_output: %s\n", str_output);
	
	//encrypt
	//aes_setkey_enc(&aes, (unsigned char *)key, 256);
	//aes_crypt_cbc(&aes, AES_ENCRYPT, *plaintext_len, (unsigned char *)iv, (unsigned char *)plaintext, (unsigned char *)str_output);
	
	//base64
	str_return = b64encode(str_output, ptr_int_plaintext_length);
	
	SFREE_ALL();
	
	return str_return;
error:
	SFREE_ALL();
	
	SFREE_PWORD(str_return);
	return NULL;
}

char *aes_decrypt(char *str_ciphertext_base64, int *ptr_int_ciphertext_length) {
	DEFINE_VAR_ALL(str_ciphertext);
	char *str_return = NULL;
	
	//base64
	//printf("test1>%d<\n", *ciphertext_len);
	str_ciphertext = b64decode(str_ciphertext_base64, ptr_int_ciphertext_length);
	//printf("str_ciphertext: %s\n", str_ciphertext);
	
	//initialize
	set_aes_key_iv();
	AES_KEY AESkey;
	ERROR_SALLOC(str_return, *ptr_int_ciphertext_length + 1);
    memset(str_return, 0, *ptr_int_ciphertext_length);
	//printf("test2>%d<\n", *ptr_int_ciphertext_length);
	//encrypt
	AES_set_decrypt_key((const unsigned char *) str_global_aes_key, 256, &AESkey);
	
	AES_cbc_encrypt((const unsigned char *)str_ciphertext, (unsigned char *)str_return,
		*ptr_int_ciphertext_length, &AESkey, (unsigned char *)str_global_aes_iv, AES_DECRYPT);
	
	//aes_crypt_cbc(&aes, AES_DECRYPT, *ciphertext_len, (unsigned char *)iv, (unsigned char *)str_ciphertext, (unsigned char *)str_return);
	//printf("test3>%d<\n", *ciphertext_len);
	SFREE_ALL();
	
	return str_return;
error:
	SFREE_ALL();
	SFREE_PWORD(str_return);
	return NULL;
}

void init_aes_key_iv() {
	//if we are developing
	if (bol_global_aes_key_reset) {
		//initialize random seed
		srand(time(NULL) * getpid() * clock());
		int i;
		for (i = 0;i < 32;i++) {
			str_global_aes_key_init[i] = rand() % 94 + 32;
		}
		for (i = 0;i < 16;i++) {
			str_global_aes_iv_init[i] = rand() % 94 + 32;
		}
	} else {
		memcpy(str_global_aes_key_init, "12345678901234567890123456789012", 32);
		memcpy(str_global_aes_iv_init , "1234567890123456", 16);
	}
}

void set_aes_key_iv() {
	memcpy(str_global_aes_key, str_global_aes_key_init, 32);
	memcpy(str_global_aes_iv , str_global_aes_iv_init , 16);
}
