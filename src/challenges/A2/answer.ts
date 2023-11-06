/**
 * In this challenge, you have to add a list of skills to each group (based on 
 * students skills in the group). Duplicates skills for one group is not permitted. Skills must be
 * sorted alphabatically. Groups order, students order and students skills order must remain
 * untouched.
 * 
 * @param groups List of groups without skills, but with students
 * @returns List of groups with a new prop skills
 */

// ↓ uncomment bellow lines and add your response!

export default function addSkillsToGroups({ groups }: { groups: Group[] }): Group[] {
    const groupSkills: Record<string, string[]> = {};
  
    for (const group of groups) {
      for (const student of group.students) {
        if (student.skills) {
          if (!groupSkills[group.name]) {
            groupSkills[group.name] = [];
          }
          groupSkills[group.name].push(...student.skills);
        }
      }
    }
    for (const groupName in groupSkills) {
      const skills = groupSkills[groupName];
      groupSkills[groupName] = Array.from(new Set(skills)).sort();
    }
  
    const groupsWithSkills: Group[] = groups.map((group) => ({
      ...group,
      skills: groupSkills[group.name] || [],
    }));
  
    return groupsWithSkills;
  }


// used interfaces, do not touch
interface Student {
    name: string;
    age: number;
    skills: string[];
}

export interface Group {
    students: Student[];
    name: string;
}

export interface GroupWithSills extends Group {
    skills: string[];
}