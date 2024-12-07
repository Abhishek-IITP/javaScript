function passgen(length)
{const chars = "abcdefghifklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%&*?><"
      ;
      let password="";
      for(let i=0,n=chars.length;i<length;i++){
        password+=chars.charAt(Math.floor(Math.random()*n));
      }
      return password;
      }
      const passLength = parseInt(prompt("Enter your password length"), 10);
      const generatedPass = passgen(passLength);
          console.log(generatedPass);