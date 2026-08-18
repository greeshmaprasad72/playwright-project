hit init 
 # Configure Git (Global) 
 git config --global user.name "Your Name" 
 git config --global user.email "your.email@example.com" 
  
 # Check Git status 
 git status 
  
 # Add all files 
 git add . 
  
 # Check status again 
 git status 
  
 # Commit changes 
 git commit -m "Your commit message" 
  
 # Connect to a Git repository (first time only) 
 git remote add origin <repository-url> 
  
 # Verify the remote repository 
 git remote -v 
  
 # Check the current branch 
 git branch 
  
 # Push to the main branch 
 git push -u origin main 
 git branch -M main

  
 # Fetch the latest changes from the remote 
 git fetch

# open jenkins
java -jar jenkins.war