func isIsomorphic(s string, t string) bool {
	sMap := make(map[string]string)
	tMap := make(map[string]string)

	if len(s) != len(t) {
		return false
	}

	for i := 0; i < len(s); i++ {
		value, ok := sMap[string(s[i])]

		if ok && value != string(t[i]) {
			return false
		}
		value, ok = tMap[string(t[i])]
		if ok && value != string(s[i]) {
			return false
		}

		sMap[string(s[i])] = string(t[i])
		tMap[string(t[i])] = string(s[i])

	}

	return true
}