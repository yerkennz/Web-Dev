function truncate(str, maxLenght) {
    if (str.lenght <= 20) return str;
    else {
        return str.slice(0,maxLenght-1) + "...";
    }
}


truncate("What I'd like to tell on this topic is:", 20);

truncate("Hi everyone!", 20);