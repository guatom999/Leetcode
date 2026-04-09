func mergeAlternately(word1 string, word2 string) string {
	var maxLength = 0

    var newWord1 []string
    var newWord2 []string

    newWord1 = strings.Split(word1,"")
    newWord2 = strings.Split(word2,"")

	if len(newWord1) > len(newWord2) {
		maxLength = len(newWord1)
	} else {
		maxLength = len(newWord2)
	}

	result := ""

	for i := 0; i < maxLength; i++ {
		if len(newWord1) > i {
			result += newWord1[i]
		}
		if len(newWord2) > i {
			result += newWord2[i]
		}
	}

	fmt.Println("Hello ", result)

	return result
}