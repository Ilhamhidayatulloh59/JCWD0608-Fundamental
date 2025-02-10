function checkAnagram(s: string, t: string) {
  const s2 = s.split("").sort().join("");
  const t2 = t.split("").sort().join("");

  return s2 == t2
}

console.log(checkAnagram("nagaram", "anagram"))
console.log(checkAnagram("rat", "car"))